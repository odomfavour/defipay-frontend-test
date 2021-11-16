import { InvoiceDtoModel } from "./InvoiceDtoModel";

export interface InvoiceViewModel extends InvoiceDtoModel {
    invoiceId: Number
    status: string
    firstName: string
    lastName: string
    invoiceNumber: string
    invoiceDate: string
    offlineRef: string
}