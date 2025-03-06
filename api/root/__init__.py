import os

from flask import Flask, make_response, send_from_directory
from root.db import mongo
from flask_restful import Api
from flask_cors import CORS

api = Api()


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True)
    CORS(app)
    mongo.init_app(app)
    frontend_folder = os.path.abspath(os.path.join(os.getcwd(), "..", "web"))
    dist_folder = os.path.join(frontend_folder, "dist")

    @app.route("/", defaults={"filename": ""})
    @app.route("/<path:filename>")
    def index(filename):
        if filename and os.path.exists(os.path.join(dist_folder, filename)):
            return send_from_directory(dist_folder, filename)
        else:
            return send_from_directory(dist_folder, "index.html")
        
   

    from root.dashBoard import dashBoard_bp

    app.register_blueprint(dashBoard_bp)

    return app
