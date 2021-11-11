import { Action } from '@reduxjs/toolkit'
import { IndustryModel, CountryModel, BusinessTypeModel } from '..'
import { merchantActionTypes } from './MerchantActionTypes'

export interface ActionWithPayload<T> extends Action {
    payload?: T
}


const initialMerchantState: IMerchantState = {
    country: undefined,
    industry: undefined,
    businesstype: undefined
}

export interface IMerchantState {
    country?: CountryModel[]
    industry?: IndustryModel[]
    businesstype?: BusinessTypeModel[]
}

export const reducer = (state: IMerchantState = initialMerchantState,
    action: ActionWithPayload<IMerchantState>) => {
    switch (action.type) {
        case merchantActionTypes.Country: {
            return { ...state }
        }
        case merchantActionTypes.FulfilCountry: {
            const country = action.payload?.country
            return { ...state, country }
        }
        case merchantActionTypes.Business: {
            return { ...state }
        }
        case merchantActionTypes.FulfilBusiness: {
            const businesstype = action.payload?.businesstype
            return { ...state, businesstype }
        }
        case merchantActionTypes.Industry: {
            return { ...state }
        }
        case merchantActionTypes.FufilIndustry: {
            const industry = action.payload?.industry
            return { ...state, industry }
        }
        default:
            return state
    }
}



