import axios from 'axios'
import { BaseModel } from '../../../basemodels/BaseModel'

import { merchantEndpoints } from './MerchantUrls'

export function getcountries() {
    return axios.get<BaseModel>(merchantEndpoints.GET_COUNTRIES)
}

export function getstates() {
    return axios.get<BaseModel>(merchantEndpoints.GET_STATES)
}

export function getIndustry() {
    return axios.get<BaseModel>(merchantEndpoints.GET_INDUSTRIES)
}

export function getIndustryCategory() {
    return axios.get<BaseModel>(merchantEndpoints.GET_INDUSTRIES_CATEGORIES)
}

export function getBusinessType() {
    return axios.get<BaseModel>(merchantEndpoints.GET_BUSINESSTYPES)
}

