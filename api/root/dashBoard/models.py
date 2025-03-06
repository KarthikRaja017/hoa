from flask import request
from flask_restful import Resource
from root import mongo

mdb = mongo.db


class GetInvoices(Resource):
    def get(self):
        year = request.args.get("year")
        if not year:
            return {"status": 0, "payload": [], "message": "Invalid input data"}
        year = int(year)
        invoices = mdb["invoice"].find({"year": year})
        data = []
        for invoice in invoices:
            data.append(invoice)
        return {"status": 1, "payload": data, "message": "success"}


class GetMaintenanceRequest(Resource):
    def get(self):
        maintenanceRequests = mdb["maintenanceRequest"].find()
        data = []
        for maintenanceRequest in maintenanceRequests:
            data.append(maintenanceRequest)
        return {"status": 1, "payload": data, "message": "success"}


class GetExpenses(Resource):
    def get(self):
        monthYear = request.args.get("monthYear")

        if not monthYear:
            return {"status": 0, "payload": [], "message": "Invalid input data"}
        month, year = monthYear.split(" ")

        year = int(year)
        expenses = mdb["expenses"].find({"month": month, "year": year})
        data = []
        for expense in expenses:
            data.append(expense)
        return {"status": 1, "payload": data, "message": "success"}


class GetTransactions(Resource):
    def get(self):
        transactions = mdb["transactions"].find()
        data = []
        for transaction in transactions:
            data.append(transaction)
        return {"status": 1, "payload": data, "message": "success"}
