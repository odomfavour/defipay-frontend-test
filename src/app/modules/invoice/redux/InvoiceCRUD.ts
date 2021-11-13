import axios from 'axios'
import { InvoiceDtoModel } from '..'
import { BaseModel } from '../../../basemodels/BaseModel'
import { invoiceEndpoints } from './InvoiceUrls'

//Invoice
export function createInvoice(model: InvoiceDtoModel) {
    console.log(model)
    return axios.post<BaseModel>(invoiceEndpoints.CREATE_INVOICE,
        {
            amount: model.amount, firstName: model.firstName,
            lastName: model.lastName, phoneNumber: model.phoneNumber,
            notes: model.notes, type: model.type,
        })
}

export function readAllInvoices() {
    return axios.get<BaseModel>(invoiceEndpoints.GET_INVOICES)
}

export function readOneInvoice() {
    return axios.get<BaseModel>(invoiceEndpoints.GET_SINGLE_INVOICE)
}

export function updateInvoice(model: InvoiceDtoModel, id: Number) {
    return axios.put<BaseModel>(invoiceEndpoints.UPDATE_INVOICE + id, {
        amount: model.amount, firstName: model.firstName,
        lastName: model.lastName, phoneNumber: model.phoneNumber,
        notes: model.notes, type: model.type,
    })
}