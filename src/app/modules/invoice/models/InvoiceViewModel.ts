import { InvoiceDtoModel } from "./InvoiceDtoModel";

export interface InvoiceViewModel extends InvoiceDtoModel {
    invoiceid: Number
    status: boolean
}