import axios from 'axios'
import { BaseModel } from '../../../basemodels/BaseModel'

import { paymentEndpoints } from './PaymentUrls'

export function createOneTimePaymentPage() {
    return axios.post<BaseModel>(paymentEndpoints.CREATE_ONE_TIMEPAYMENT)
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