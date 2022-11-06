#!/usr/bin/env python3

from flask import Flask, request, send_file
from flask_cors import CORS
from os import path, listdir, remove
from PIL import Image
from datetime import datetime
from pprint import pprint
from sys import exit

BENCH_PATH = "/app/benches"
THUMB_PATH = "/app/thumbs"

# --- DEBUG ---

class LoggingMiddleware(object):
    def __init__(self, app):
        self.app = app

    def __call__(self, env, resp):
        # errorlog = env["wsgi.errors"]
        # pprint(("REQUEST", env), stream=errorlog)
        print(env["wsgi.input"].peek())

        def log_response(status, headers, *args):
            # pprint(("RESPONSE", status, headers), stream=errorlog)
            return resp(status, headers, *args)

        return self.app(env, log_response)

# --- HELPER ---

def saveImage(image, p):
    p = path.join(p, image.filename)
    print("Saving image to %s..." % (p), flush=True)
    image.save(p)
    print("Done.", flush=True)

# For sorting files by date of creation.
def dateKey(pathname):
    datestring = pathname.split("/")[-1].replace(".png", "")
    try:
        t = datetime.strptime(datestring, "%H-%M-%S-%m-%d-%Y")
    except ValueError:
        print("ERROR (dateKey): Could not parse datestring: '%s'." % (datestring))
        return -1
    return t.timestamp()

# Filter the image paths by removing those that don't have proper datetime
# in their filename. Also delete those files.
def filterPaths(paths):
    filtered = []
    for p in paths:
        if dateKey != -1:
            filtered.append(p)
        else:
            print("Deleting file with erroneous name: '%s'." % (p), flush=True)
            remove(p)
    return filtered

# Return sorted list of image paths by descending dates.
def getPaths(type):
    dirList = listdir(BENCH_PATH)
    # Because the "thumbs" endpoint is dynamic we can append all of
    # image paths to the list and the thumbnails will get
    # generated on the fly.
    url = "https://www.piskiewicz.org/benches/%s/" % (type)
    paths = []
    for x in dirList:
        paths.append(url + x)
    paths = filterPaths(paths) # Remove files without proper datetime in filename.
    return sorted(paths, key=dateKey, reverse=True)

# --- FLASK ---

app = Flask(__name__)
CORS(app)

# --- ROUTES ---

@app.route("/upload-image", methods=["POST"])
def uploadImage():
    image = request.files["image"]
    if image:
        print("Image received. %s" % (image))
        saveImage(image, BENCH_PATH)
    return "OK"

@app.route("/image/<filename>", methods=["GET"])
def getImage(filename):
    return send_file(path.join(BENCH_PATH, filename))

@app.route("/thumb/<filename>", methods=["GET"])
def getThumb(filename):
    sysPath = path.join(THUMB_PATH, filename)
    if path.exists(sysPath):
        return send_file(sysPath, mimetype="image/png")
    else:
        with Image.open(path.join(BENCH_PATH, filename)) as img:
            thumb = img.resize((img.width // 4, img.height // 4))
            dest = path.join(THUMB_PATH, filename)
            thumb.save(dest, format="PNG")
            return send_file(dest, mimetype="image/png")

@app.route("/image-amount", methods=["GET"])
def getImageAmount():
    return str(len(listdir(BENCH_PATH)))

@app.route("/image-paths", methods=["GET"])
def getImagePaths():
    return getPaths("image")

@app.route("/thumb-paths", methods=["GET"])
def getThumbPaths():
    return getPaths("thumb")

# --- RUNTIME ---

if __name__ == "__main__":
    # Wrap the Flask app in the logging middleware in order to
    # print the incoming requests as well as responses.
    app.wsgi_app = LoggingMiddleware(app.wsgi_app)
    app.run(host="0.0.0.0", port=80)
