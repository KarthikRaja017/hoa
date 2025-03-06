from pymongo import MongoClient

from root.config import MONGO_DATABASE, MONGO_URI

class MongoDB:
    def __init__(self, app=None):
        self.app = app
        if app is not None:
            self.init_app(app)

    def init_app(self, app):
        self.client = MongoClient(MONGO_URI, tlsAllowInvalidCertificates=True)
        self.db = self.client[MONGO_DATABASE]

    def initProductionDb(self, uri, db):
        self.productionClient = MongoClient(uri, tlsAllowInvalidCertificates=True)
        return self.productionClient[db]

    def getDb(self, dbName):
        return self.client[dbName]


mongo = MongoDB()