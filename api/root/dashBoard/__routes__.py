from root.dashBoard.models import GetExpenses, GetInvoices, GetMaintenanceRequest, GetTransactions
from . import dashBoard_api


dashBoard_api.add_resource(GetInvoices, "/get/invoices")
dashBoard_api.add_resource(GetMaintenanceRequest, "/get/maintenance/requests")
dashBoard_api.add_resource(GetExpenses, "/get/expenses")
dashBoard_api.add_resource(GetTransactions, "/get/transactions")
