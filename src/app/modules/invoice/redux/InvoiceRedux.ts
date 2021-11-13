import { Action } from '@reduxjs/toolkit'
import { InvoiceViewModel } from '..'
import { invoiceActionTypes } from './InvoiceActionTypes'

export interface ActionWithPayload<T> extends Action {
    payload?: T
}


const initialInvoiceState: IInvoiceState = {
    invoices: undefined,
    invoice: undefined,
}

export interface IInvoiceState {
    invoices?: InvoiceViewModel[],
    invoice?: InvoiceViewModel,
}

export const reducer = (state: IInvoiceState = initialInvoiceState,
    action: ActionWithPayload<IInvoiceState>) => {
    switch (action.type) {
        case invoiceActionTypes.Invoices: {
            return { ...state }
        }
        case invoiceActionTypes.FufilInvoicePage: {
            const invoices = action.payload?.invoices
            return { ...state, invoices }
        }
        case invoiceActionTypes.CreateInvoice: {
            return { ...state }
        }
        default:
            return state
    }
}



