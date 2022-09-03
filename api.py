#!/usr/bin/env python3

from flask import Flask, request
from flask_cors import CORS
from mysql.connector import connect, Error, errorcode
import os
import sys
from datetime import datetime
from pulsars import PulsarTree, rangeOfSight


### UTILITIES ###

def done():
    print("\033[92mDone.\033[0m", flush=True)

def fail():
    print("\033[91mThe service encountered an error.\n\033[0mRestarting...", flush=True)
    sys.exit(1)


### DATABASE ###

# Connect to the database
def connectToDB():
    try:
        cn = connect(
            host = "database",
            user = "root",
            password = os.environ.get("DB_PASS"),
            database = "api"
        )
        cn.autocommit = True
        return cn;
    except Error as e:
        if (e.errno == errorcode.CR_CONN_HOST_ERROR):
            print(
                    "\033[91mGot error "
                    + str(e.errno) +
                    ". This means that the database is "
                    "not yet initialized. Shutting down and waiting until "
                    "the container gets restarted.\033[0m"
                 )
        else:
            print(e)
        fail()

def execQuery(q, array = True):
    print("Executing query: %s..." % (q[:128]), flush=True)
    conn = connectToDB()
    try:
        with conn.cursor(dictionary=True) as cursor:
            cursor.execute(q)
            if array:
                result = cursor.fetchall()
            else:
                result = cursor.fetchone()
            return result
    except Error as e:
        print("\033[91m%s\033[0m" % (e), flush=True)
        fail()

# Creating message table.
def createMessageTable():
    # Make a new table.
    print("Creating new 'messages' table...")
    execQuery("CREATE TABLE IF NOT EXISTS messages (id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY, ip INT(4) UNSIGNED NOT NULL, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, message TEXT NOT NULL, time DATETIME)");
    done()

### RUNTIME ###

app = Flask(__name__)
CORS(app)

# Routes
@app.route("/message", methods=["POST"])
def receiveMessage():
    form = request.form
    timeFormat = "%d, %m, %Y %H:%M"
    time = datetime.now().strftime(timeFormat)
    timestr = "STR_TO_DATE('%s', '%s')" % (time, timeFormat.replace("M", "i"))
    payload = "INET_ATON('%s'), '%s', '%s', '%s', %s" % (request.remote_addr, form["name"], form["email"], form["message"], timestr)
    execQuery("INSERT INTO messages (ip, name, email, message, time) VALUES (%s)" % (payload))
    return "Sent."

@app.route("/pulsars", methods=["GET"])
def pulsars():
    # Calculate range of visible coordinates in ecliptical
    # coordinate system.
    r = rangeOfSight((23.6, 15.8), 5) # Sensor size 23.6 mm x 15.8 mm
    # Perform a range search for chosen coord range
    # on the 2-dimensional tree and return results.
    plst = pulsarT.rangeSearch(pulsarT.root, r)
    returnList = []
    for p in plst:
        returnList.append(p.returnVars())
    return returnList

@app.route("/pulsars/range", methods=["GET"])
def range():
    if r:
        return r
    else:
        return 404

if __name__ == "__main__":
    createMessageTable()
    pulsarT = PulsarTree("pulsars.csv")
    # Initialize the range of sight.
    r = None
    port = int(os.environ.get('PORT', 80))
    app.run(debug=True, host='0.0.0.0', port=port)
