import { Action } from '@reduxjs/toolkit'
import { CustomerViewModel } from '..'
import { customerActionTypes } from './CustomerActionTypes'

export interface ActionWithPayload<T> extends Action {
    payload?: T
}


const initialCustomerState: ICustomerState = {
    customers: undefined,
    customer: undefined,
}

export interface ICustomerState {
    customers?: CustomerViewModel[],
    customer?: CustomerViewModel,
}

export const reducer = (state: ICustomerState = initialCustomerState,
    action: ActionWithPayload<ICustomerState>) => {
    switch (action.type) {
        case customerActionTypes.Customers: {
            return { ...state }
        }
        case customerActionTypes.FufilCustomers: {
            const customers = action.payload?.customers
            return { ...state, customers }
        }
        case customerActionTypes.Customer: {
            return { ...state }
        }
        case customerActionTypes.FufilCustomer: {
            const customer = action.payload?.customer
            return { ...state, customer }
        }
        case customerActionTypes.CreateCustomer: {
            return { ...state }
        }
        case customerActionTypes.UpdateCustomer: {
            return { ...state }
        }
        default:
            return state
    }
}



