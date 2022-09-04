#!/usr/bin/env python3

import csv
from json import dumps
from datetime import datetime, timezone
from math import cos, atan, degrees
from random import random
from math import sqrt
from mergesort import mergeSort
from kdtree import KDTree, Node

class Range:
    def __init__(self, center, range, axis=0):
        half = range/2
        # If this is the y axis...
        if axis:
            self.r = [self.adjustDec(center[1]-half), self.adjustDec(center[1]+half)]
        else:
            self.r = [self.adjustRa(center[0]-half), self.adjustRa(center[0]+half)]
        if self.r[0] > self.r[1]:
            self.r[0], self.r[1] = self.r[1], self.r[0]

    def __getitem__(self, key):
        return self.r[key]
        
    # If the computed coordinate is too low or too high
    # those functions adjusts it so it fits in the range of possible
    # coordinates for right ascension/declination.

    def adjustRa(self, val):
        if val > 360:
            return val-360
        elif val < 0:
            return 360+val
        else:
            return val

    def adjustDec(self, val):
        if val < -90:
            return -90
        elif val > 90:
            return 90
        else:
            return val

# Calculates camera's angle of view for chosen dimension and f.
def calcAngleOfView(dimension, f):
    return degrees(2 * atan(dimension/(2*f)))

# Convert from time to decimal degrees.
def toDegrees(time):
    coord = 0
    coord+=time.hour*15 # 1h == 15 deg
    coord+=time.minute/60
    coord+=time.second/60*60
    return coord

def computeDec(date, north):
    yearDay = date.timetuple().tm_yday # Day of the year out of 365
    # Compute the change in declination due to precession.
    pChange = -23.45 * cos(360/355 * (yearDay*10))
    return north + pChange

# Calculate the central coordinates meaning
# the coordinates directly above my head.
def center(north):
    # Ascention based on current hour.
    t = datetime.now(timezone.utc)
    ra = toDegrees(t)

    # Declination with correction for precession.
    dec = computeDec(t, north)
    return ra, dec


# Calculate the range of visible coordinates in the sky
# for chosen camera sensor dimensions and focal length.
def rangeOfSight(sensorDimensions, f, north):
    horizontal = calcAngleOfView(sensorDimensions[0], f)
    vertical = calcAngleOfView(sensorDimensions[1], f)
    c = center(north)
    ra = Range(c, horizontal)
    dec = Range(c, vertical, 1)
    return *ra, *dec

# Probability distribution as in Dmitris Achlioptas' work:
# "Database-friendly random projections: Johnson-Lindenstrauss with binary coins"
def projectDistribution():
    rand = random()
    sqrt3 = sqrt(3)
    if rand <= 1/6:
        return 1*sqrt3
    elif rand <= 2/3:
        return 0

    return -1*sqrt3

# Class Pulsar is an extension of K-D Tree node that also contains other values
# about the pulsar itself such as frequency of pulses.
class Pulsar(Node):
    def __init__(self, left, right, name, location, frequency, binary):
        super(Pulsar, self).__init__(location, left, right)
        self.name = name
        self.frequency = frequency
        self.binary = binary

    def returnVars(self):
        v = vars(self).copy()
        v.pop("left")
        v.pop("right")
        return v

# K-D Tree for making range queries
class PulsarTree(KDTree):
    def __init__(self, pulsarFile):
        pulsarData = self.getData(pulsarFile)
        self.root = self.build(pulsarData)

    def getData(self, filename):
        # Read pulsars file and sort the pulsars according
        # to increasing coordinate values.
        with open(filename) as pulsars:
            reader = csv.reader(pulsars, delimiter=";")
            rows = []
            for row in reader:
                if row[0] and row[0] != "#":
                    rowDict = {
                        "name": row[1],
                        "location": [float(val) for val in row[2:4]],
                        "frequency": None,
                        "binary": False
                    }
                    if row[6] != "*":
                        rowDict["binary"] = row[6]
                    if row[4] != "*":
                        rowDict["frequency"] = row[4]
                    rows.append(rowDict)
            return rows

    def build(self, pulsars, depth=0):
        if not pulsars:
            return None
        k = len(pulsars[0]["location"]) # Number of dimensions
        axis = depth % k
        mergeSort(pulsars, axis)
        median = len(pulsars) // 2
        return Pulsar(self.build(pulsars[:median], depth+1), self.build(pulsars[median+1:], depth+1), **pulsars[median])