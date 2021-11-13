import { Action } from '@reduxjs/toolkit'
import { checkoutActionTypes, OneTimeCheckOutvIEWModel } from '..'

export interface ActionWithPayload<T> extends Action {
    payload?: T
}


const initialCheckoutState: ICheckOutState = {
    checkouts: undefined,
    checkout: undefined,
}

export interface ICheckOutState {
    checkouts?: OneTimeCheckOutvIEWModel[],
    checkout?: OneTimeCheckOutvIEWModel,
}

export const reducer = (state: ICheckOutState = initialCheckoutState,
    action: ActionWithPayload<ICheckOutState>) => {
    switch (action.type) {
        case checkoutActionTypes.OneTimeCheckOuts: {
            return { ...state }
        }
        case checkoutActionTypes.FufilOneTimeCheckOuts: {
            const checkouts = action.payload?.checkouts
            return { ...state, checkouts }
        }
        case checkoutActionTypes.CreateOneTimeCheckOut: {
            return { ...state }
        }
        case checkoutActionTypes.OneTimeCheckOut: {
            return { ...state }
        }
        case checkoutActionTypes.FufilOneTimeCheckOut: {
            const checkout = action.payload?.checkout
            return { ...state, checkout }
        }
        default:
            return state
    }
}



