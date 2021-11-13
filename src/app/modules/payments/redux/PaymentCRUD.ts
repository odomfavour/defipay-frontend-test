import axios from 'axios'
import { OneTimePaymentDtoModel } from '..'
import { BaseModel } from '../../../basemodels/BaseModel'
import { paymentEndpoints } from './PaymentUrls'


export function createOneTimePaymentPage(model: OneTimePaymentDtoModel) {
    console.log(model)
    return axios.post<BaseModel>(paymentEndpoints.CREATE_ONE_TIMEPAYMENT,
        {
            amount: model.amount, description: model.description,
            emailaddress: model.emailaddress, pagename: model.pagename,
            redirectLink: model.redirectLink, successmessage: model.successmessage,
            paidBy: 1
        })
}

//Payment Plan
export function createPaymentPlan() {
    return axios.post<BaseModel>(paymentEndpoints.CREATE_PAYMENT_PLAN)
}

export function readAllPaymentPlan() {
    return axios.get<BaseModel>(paymentEndpoints.GET_ALL_PAYMENT_PLANS)
}

export function readPaymentPlanById() {
    return axios.get<BaseModel>(paymentEndpoints.GET_PAYMENT_PLAN_BY_ID)
}


//Subcription Payment page
export function createSubscriptionPaymentPage() {
    return axios.get<BaseModel>(paymentEndpoints.CREATE_OSUBSCRIPTION_PAYMENT_PAGE)
}