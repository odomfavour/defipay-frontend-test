import { Action } from '@reduxjs/toolkit'
import { IndustryModel, CountryModel, BusinessTypeModel } from '..'
import { IndustryCategoryModel } from '../models/industrycategory/IndustryCategoryModel'
import { StateOrRegionModel } from '../models/stateorregions/StateOrRegionModel'
import { merchantActionTypes } from './MerchantActionTypes'

export interface ActionWithPayload<T> extends Action {
    payload?: T
}


const initialMerchantState: IMerchantState = {
    country: undefined,
    states: undefined,
    industry: undefined,
    industrycategory: undefined,
    businesstype: undefined
}

export interface IMerchantState {
    country?: CountryModel[]
    industry?: IndustryModel[]
    businesstype?: BusinessTypeModel[]
    industrycategory?: IndustryCategoryModel[]
    states?: StateOrRegionModel[]
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
        case merchantActionTypes.States: {
            return { ...state }
        }
        case merchantActionTypes.FulfilStates: {
            const states = action.payload?.states
            return { ...state, states }
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
        case merchantActionTypes.IndustryCategory: {
            return { ...state }
        }
        case merchantActionTypes.FufilIndustryCategory: {
            const industrycategory = action.payload?.industrycategory
            return { ...state, industrycategory }
        }
        default:
            return state
    }
}



