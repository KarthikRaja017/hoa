from flask import Blueprint
from flask_restful import Api

dashBoard_bp = Blueprint("dashBoard", __name__, url_prefix="/server/api")
dashBoard_api = Api(dashBoard_bp)

from . import __routes__
