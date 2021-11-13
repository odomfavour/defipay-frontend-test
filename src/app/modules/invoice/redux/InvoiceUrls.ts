import { config } from '../../../../apiBaseUrl'

const API_URL = config.url.apiUrl;

const CREATE_INVOICE = `${API_URL}/invoice/addinvoice`
const GET_INVOICES = `${API_URL}/invoice/getinvoices`
const GET_SINGLE_INVOICE = `${API_URL}/invoice/getinvoice`
const GET_INVOICE_BY_LINK = `${API_URL}/invoice/getinvoicebylink/{link}`
const UPDATE_INVOICE = `${API_URL}/invoice/updateinvoice`

export const invoiceEndpoints = {
    CREATE_INVOICE,
    GET_INVOICES,
    UPDATE_INVOICE,
    GET_SINGLE_INVOICE,
    GET_INVOICE_BY_LINK
};
