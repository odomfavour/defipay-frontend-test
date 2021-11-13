import { InvoiceViewModel } from ".."
import { invoiceActionTypes } from "./InvoiceActionTypes"
export const actions = {
    createinvoice: () => ({ type: invoiceActionTypes.CreateInvoice }),
    getinvoices: () => ({ type: invoiceActionTypes.Invoices }),
    fulfilinvoices: (invoices: InvoiceViewModel[]) =>
        ({ type: invoiceActionTypes.FufilInvoicePage, payload: { invoices } }),
}