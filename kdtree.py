#!/usr/bin/env python3

class Node:
    def __init__(self, location, left, right):
        self.location = location
        self.left = left
        self.right = right

# This is a superclass with useful functions for making queries on the tree.
# The build and __init__ are implemented in pulsars.py as they have some
# functionality specific to implementation.
class KDTree:
    # Find minimal value for subtree, where x is the root node
    # of subtree.
    def min(self, x):
        if x.left:
            return self.min(x.left)
        return x

    # Same but for maximum
    def max(self, x):
        if x.right:
            return self.max(x.right)
        return x

    # X is the "root" node of the subtree or "branch" that
    # we want to parse in order to check if it contains the
    # entirety of our range. We do it by computing the lowest
    # and highest values of x and y in the entire subtree.
    def isContainedEntirelyInBranch(self, x, range):
        # Compute max and min values for subtree.
        max = self.max(x).location
        min = self.min(x).location
        if min[0] >= range[0] and min[1] >= range[2] and max[0] <= range[1] and max[1] >= range[3]:
            return True
        else:
            return False

    def isIntersectingWithBranch(self, x, range):
        max = self.max(x).location
        min = self.min(x).location
        if range[0] > max[0] or range[1] < min[0] or range[2] > min[1] or range[3] < min[1]:
            return False
        else:
            return True

    # Traverse from root node and return all members.
    def traverse(self, x):
        members = []
        if x:
            members += self.traverse(x.left)
            members.append(x)
            members += self.traverse(x.right)
        return members

    def rangeSearch(self, x, range):
        results = []
        if x is None:
            return results
        elif range[0] <= x.location[0] and range[1] >= x.location[0] and range[2] <= x.location[1] and range[3] >= x.location[1]:
            results.append(x)
        if x.left:
            if self.isContainedEntirelyInBranch(x.left, range):
                results += self.traverse(x.left)
            elif self.isIntersectingWithBranch(x.left, range):
                results += self.rangeSearch(x.left, range)
        if x.right:
            if self.isContainedEntirelyInBranch(x.right, range):
                results += self.traverse(x.right)
            elif self.isIntersectingWithBranch(x.right, range):
                results += self.rangeSearch(x.right, range)
        return results
