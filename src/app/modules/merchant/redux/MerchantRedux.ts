import { Action } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { BaseModel } from '../models/BaseModel'
import { CountryModel } from '../models/country/CountryModel'
import { merchantActionTypes } from './MerchantActionTypes'

export interface ActionWithPayload<T> extends Action {
    payload?: T
}


const initialMerchantState: IMerchantState = {
    baseModel: undefined,
}

export interface IMerchantState {
    baseModel?: BaseModel
    country?: CountryModel
}

const persistConfig = {
    storage, key: 'defi-pay-auth', whitelist: ['user', 'accessToken']
}

export const reducer = persistReducer(persistConfig,
    (state: IMerchantState = initialMerchantState, action: ActionWithPayload<IMerchantState>) => {
        switch (action.type) {
            case merchantActionTypes.Country: {
                return { ...state }
            }
            case merchantActionTypes.FulfilCountry: {
                const country = action.payload?.country
                return { ...state, country }
            }
            default:
                return state
        }
    }
)


