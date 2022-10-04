#!/usr/bin/env python3

from flask import Flask, request, send_file
from flask_cors import CORS
from os import path, listdir

BENCH_PATH = "/app/benches"

# Helper
def saveImage(image, p):
    p = path.join(p, image.filename)
    print("Saving image to %s..." % (p), flush=True)
    image.save(p)
    print("Done.", flush=True)

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

@app.route("/image-amount", methods=["GET"])
def getImageAmount():
    return str(len(listdir(BENCH_PATH)))

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80)
