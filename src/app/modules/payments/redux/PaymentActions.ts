import { OneTimePaymentModel, PaymentPlanModel } from ".."
import { SucbscriptionModel } from "../models/SubscriptionModel"
import { paymentActionTypes } from "./PaymentActionTypes"
export const actions = {
    createonetimepaymentpage: () => ({ type: paymentActionTypes.CreateOnetimePaymentPage }),
    getonetimepaymentpages: () => ({ type: paymentActionTypes.OnetimePaymentPage }),
    fulfilonetimepaymentpages: (otppages: OneTimePaymentModel[]) =>
        ({ type: paymentActionTypes.FufilOnetimePaymentPage, payload: { otppages } }),
    getpaymentplan: () => ({ type: paymentActionTypes.PaymentPlan }),
    fulfilpaymentplan: (paymentplans: PaymentPlanModel[]) =>
        ({ type: paymentActionTypes.FufilPaymentPlan, payload: { paymentplans } }),
    getpaymentsubscription: () => ({ type: paymentActionTypes.SubscriptionPage }),
    fulfilindustry: (subscription: SucbscriptionModel[]) =>
        ({ type: paymentActionTypes.FufilSubscriptionPage, payload: { subscription } })
}