import { OneTimePaymentViewModel, PaymentPlanModel } from ".."
import { SucbscriptionModel } from "../models/SubscriptionModel"
import { paymentActionTypes } from "./PaymentActionTypes"
export const actions = {
    createonetimepaymentpage: () => ({ type: paymentActionTypes.CreateOnetimePaymentPage }),
    getonetimepaymentpages: () => ({ type: paymentActionTypes.OnetimePaymentPage }),
    fulfilonetimepaymentpages: (otpayments: OneTimePaymentViewModel[]) =>
        ({ type: paymentActionTypes.FufilOnetimePaymentPage, payload: { otpayments } }),
    getpaymentplan: () => ({ type: paymentActionTypes.PaymentPlan }),
    fulfilpaymentplan: (paymentplans: PaymentPlanModel[]) =>
        ({ type: paymentActionTypes.FufilPaymentPlan, payload: { paymentplans } }),
    getpaymentsubscription: () => ({ type: paymentActionTypes.SubscriptionPage }),
    fulfilsubscription: (subscription: SucbscriptionModel[]) =>
        ({ type: paymentActionTypes.FufilSubscriptionPage, payload: { subscription } }),
    pushLink: (linkUrl: string) => ({ type: paymentActionTypes.LinkPusher, payload: { linkUrl } }),
}