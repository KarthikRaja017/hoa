import request from "umi-request";

const API_URL = "http://localhost:5000/server/api";

export async function getInvoices(params: any) {
  return request(`${API_URL}/get/invoices`, {
    method: "GET",
    params,
  });
}

export async function getMaintenanceRequest(params: any) {
  return request(`${API_URL}/get/maintenance/requests`, {
    method: "GET",
    params,
  });
}

export async function getExpenses(params: any) {
  return request(`${API_URL}/get/expenses`, {
    method: "GET",
    params,
  });
}


export async function getTransactions(params: any) {
  return request(`${API_URL}/get/transactions`, {
    method: "GET",
    params,
  });
}
