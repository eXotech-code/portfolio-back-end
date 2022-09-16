#!/usr/bin/env python3

from flask import Flask, request
from flask_cors import CORS
from mysql.connector import connect, Error, errorcode
from datetime import datetime
from json import dumps
from pulsars import PulsarTree, rangeOfSight
import os
import sys


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

def createPostTable():
    print("Creating new 'posts' table.")
    execQuery(
        """
        CREATE TABLE IF NOT EXISTS posts (
            id INT(10) UNSIGNED NOT NULL PRIMARY KEY,
            image TINYINT NOT NULL,
            title VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL,
            date DATETIME NOT NULL,
            content TEXT NOT NULL
        )
        """
    )
    done()
    print("Creating new 'posttags' table.")
    execQuery(
        """
        CREATE TABLE IF NOT EXISTS posttags (
            relid INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
            postid INT(10) UNSIGNED NOT NULL,
            tag VARCHAR(255) NOT NULL
        )
        """
    )
    done()
    print("Creating new 'tags' table.")
    execQuery(
        """
        CREATE TABLE IF NOT EXISTS tags (
            name VARCHAR(255) NOT NULL PRIMARY KEY,
            bgcolour VARCHAR(6) NOT NULL,
            colour VARCHAR(6) NOT NULL
        )
        """
    )
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

@app.route("/pulsars/<north>", methods=["GET"])
def pulsars(north):
    # Calculate range of visible coordinates in ecliptical
    # coordinate system.
    global r
    r = rangeOfSight((23.6, 15.8), 35, float(north)) # Sensor size 23.6 mm x 15.8 mm
    print("Got query for range of coordinates: xMin=%s, xMax=%s, yMin=%s, yMax=%s" % (r[0], r[1], r[2], r[3]), flush=True)
    # Perform a range search for chosen coord range
    # on the 2-dimensional tree and return results.
    print("Searching...")
    plst = pulsarT.rangeSearch(pulsarT.root, r)
    done()
    print("Search returned %s objects" % (len(plst)), flush=True)
    returnList = []
    for p in plst:
        returnList.append(p.returnVars())
    return returnList

@app.route("/pulsars/range", methods=["GET"])
def range():
    if r:
        return dumps(r)
    else:
        return "ERROR: Range cannot be fetched before pulsar coordinates.", 404

@app.route("/newp", methods=["POST"])
def newp():
    data = request.json
    for post in data:
        print(post, flush=True)
        timeFormat = "%d.%m.%Y %H:%M"
        payloadT = "STR_TO_DATE('%s', '%s')" % (post["date"], timeFormat.replace("M", "i"))
        payload = "%d, %d, '%s', '%s', %s, '%s'" % (post["id"], post["image"], post["title"], post["description"], payloadT, post["content"])
        query = "INSERT INTO posts (id, image, title, description, date, content) VALUES (%s)" % (payload)
        execQuery(query)
        for tag in post["tags"]:
            payload = "%d, '%s'" % (post["id"], tag[0])
            query = "INSERT INTO posttags (postid, tag) VALUES (%s)" % (payload)
            execQuery(query)
            payload = "'%s', '%s', '%s'" % (tag[0], tag[1][0], tag[1][1])
            query = "INSERT IGNORE INTO tags (name, bgcolour, colour) VALUES (%s)" % (payload)
            execQuery(query)
    return "Done."


if __name__ == "__main__":
    createMessageTable()
    createPostTable()
    pulsarT = PulsarTree("pulsars.csv")
    # Initialize the range of sight.
    r = None
    port = int(os.environ.get('PORT', 80))
    app.run(debug=True, host='0.0.0.0', port=port)