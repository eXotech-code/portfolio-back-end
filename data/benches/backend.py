#!/usr/bin/env python3

from flask import Flask, request, send_file
from flask_cors import CORS
from os import path, listdir
from PIL import Image
from datetime import datetime

BENCH_PATH = "/app/benches"
THUMB_PATH = "/app/thumbs"

# Helper
def saveImage(image, p):
    p = path.join(p, image.filename)
    print("Saving image to %s..." % (p), flush=True)
    image.save(p)
    print("Done.", flush=True)

# For sorting files by date of creation.
def dateKey(pathname):
    datestring = pathname.split("/")[-1].replace(".png", "")
    t = datetime.strptime(datestring, "%H-%M-%S-%m-%d-%Y")
    return t.timestamp()

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
    return sorted(paths, key=dateKey, reverse=True)

app = Flask(__name__)
CORS(app)

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


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)
