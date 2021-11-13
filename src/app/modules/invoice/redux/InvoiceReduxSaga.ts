import { put, takeLatest } from 'redux-saga/effects'
import { invoiceActionTypes } from './InvoiceActionTypes'
import { actions } from './InvoiceActions'
import { InvoiceViewModel, readAllInvoices } from '..'


export function* invoiceSaga() {

    yield takeLatest(invoiceActionTypes.Invoices, function* allInvoiceRequested() {
        const { data } = yield readAllInvoices()
        const invoices = data.data as InvoiceViewModel[];
        yield put(actions.fulfilinvoices(invoices))
    })
}
