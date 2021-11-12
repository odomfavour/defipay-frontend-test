import { Action } from '@reduxjs/toolkit'
import { OneTimePaymentModel, PaymentPlanModel } from '..'
import { paymentActionTypes } from './PaymentActionTypes'

export interface ActionWithPayload<T> extends Action {
    payload?: T
}


const initialMPaymentState: IPaymentState = {
    onetimepaymentpages: undefined,
    paymentplan: undefined,
    subscriptionpages: undefined
}

export interface IPaymentState {
    onetimepaymentpages?: OneTimePaymentModel[],
    paymentplan?: PaymentPlanModel[],
    subscriptionpages?: PaymentPlanModel[],
}

export const reducer = (state: IPaymentState = initialMPaymentState,
    action: ActionWithPayload<IPaymentState>) => {
    switch (action.type) {
        case paymentActionTypes.OnetimePaymentPage: {
            return { ...state }
        }
        case paymentActionTypes.FufilOnetimePaymentPage: {
            const otpayment = action.payload?.onetimepaymentpages
            return { ...state, otpayment }
        }
        case paymentActionTypes.CreateOnetimePaymentPage: {
            return { ...state }
        }
        case paymentActionTypes.FufilPaymentPlan: {
            const paymentplans = action.payload?.paymentplan
            return { ...state, paymentplans }
        }
        case paymentActionTypes.PaymentPlan: {
            return { ...state }
        }
        case paymentActionTypes.SubscriptionPage: {
            return { ...state }
        }
        // case paymentActionTypes.CreateSubscriptionPage: {
        //     const industry = action.payload?.industry
        //     return { ...state, industry }
        // }
        default:
            return state
    }
}



