import { Action } from '@reduxjs/toolkit'
import { OneTimePaymentViewModel, PaymentPlanModel } from '..'
import { paymentActionTypes } from './PaymentActionTypes'

export interface ActionWithPayload<T> extends Action {
    payload?: T
}


const initialMPaymentState: IPaymentState = {
    otpayments: undefined,
    paymentplan: undefined,
    subscriptionpages: undefined,
    linkUrl: undefined
}

export interface IPaymentState {
    otpayments?: OneTimePaymentViewModel[],
    paymentplan?: PaymentPlanModel[],
    subscriptionpages?: PaymentPlanModel[],
    linkUrl?: String
}

export const reducer = (state: IPaymentState = initialMPaymentState,
    action: ActionWithPayload<IPaymentState>) => {
    switch (action.type) {
        case paymentActionTypes.OnetimePaymentPage: {
            return { ...state }
        }
        case paymentActionTypes.LinkPusher: {
            const linkUrl = action.payload?.linkUrl
            return { ...state, linkUrl }
        }
        case paymentActionTypes.FufilOnetimePaymentPage: {
            const otpayments = action.payload?.otpayments
            return { ...state, otpayments }
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



