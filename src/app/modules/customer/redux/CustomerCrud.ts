import axios from 'axios'
import { CustomerDtoModel } from '..'
import { BaseModel } from '../../../basemodels/BaseModel'
import { customerEndpoints } from './CustomerUrls'

//Invoice
export function createCustomer(model: CustomerDtoModel) {
    console.log(model)
    return axios.post<BaseModel>(customerEndpoints.CREATE_CUSTOMER,
        {
            firstName: model.firstName,
            lastName: model.lastName, phoneNumber: model.phoneNumber,
            emailAddress: model.emailAddress,
        })
}

export function readAllCustomers() {
    return axios.get<BaseModel>(customerEndpoints.GET_CUSTOMERS)
}

export function readOneCustomer(id: Number) {
    return axios.get<BaseModel>(customerEndpoints.GET_ONE_CUSTOMER + id)
}

export function updateCustomer(model: CustomerDtoModel, id: Number) {
    return axios.put<BaseModel>(customerEndpoints.UPDATE_CUSTOMER + id, {
        firstName: model.firstName,
        lastName: model.lastName, phoneNumber: model.phoneNumber,
        emailAddress: model.emailAddress,
    })
}