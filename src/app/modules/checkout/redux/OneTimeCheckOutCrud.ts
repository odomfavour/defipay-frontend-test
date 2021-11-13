import axios from 'axios'
import { OneTimeCheckOutDtoModel } from '..'
import { BaseModel } from '../../../basemodels/BaseModel'
import { checkoutEndpoints } from './OneTimeCheckOutUrls'

//Invoice
export function createOneTimeCheckout(model: OneTimeCheckOutDtoModel) {
    console.log(model)
    return axios.post<BaseModel>(checkoutEndpoints.CREATE_ONETIME_CHECKOUT,
        {
            amount: model.amount, firstName: model.firstName,
            lastName: model.lastName, email: model.email,
            paymentChannel: model.paymentChannel, ipAddress: model.ipAddress,
        })
}

export function readAllOneTimeCheckouts() {
    return axios.get<BaseModel>(checkoutEndpoints.GET_ONETIME_CHECKOUTS)
}

export function readOneCheckOut() {
    return axios.get<BaseModel>(checkoutEndpoints.GET_ONETIME_CHECKOUT)
}