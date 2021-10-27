import { Action } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { MerchantRegisterModel } from '../models/MerchantRegisterModel'
import { UserModel } from '../models/UserModel'
import { actionTypes } from './AuthActionTypes'

export interface ActionWithPayload<T> extends Action {
  payload?: T
}


const initialAuthState: IAuthState = {
  user: undefined,
  accessToken: undefined,
}

export interface IAuthState {
  user?: UserModel
  accessToken?: string
  merchant?: MerchantRegisterModel
}

export const reducer = persistReducer(
  { storage, key: 'defi-pay-auth', whitelist: ['user', 'accessToken'] },
  (state: IAuthState = initialAuthState, action: ActionWithPayload<IAuthState>) => {
    switch (action.type) {
      case actionTypes.Login: {
        const accessToken = action.payload?.accessToken
        // console.log("login", accessToken)
        return { accessToken, user: undefined }
      }

      case actionTypes.Register: {
        const accessToken = action.payload?.accessToken
        return { accessToken, user: undefined }
      }

      case actionTypes.VerifyEmail: {
        const merchant = action.payload?.merchant
        return { accessToken: undefined, merchant }
      }

      case actionTypes.Logout: {
        return initialAuthState
      }

      case actionTypes.UserRequested: {
        return { ...state, user: undefined }
      }

      case actionTypes.UserLoaded: {
        const user = action.payload?.user
        return { ...state, user }
      }
      case actionTypes.ConfirmEmail: {
        return { ...state }
      }
      case actionTypes.SetUser: {
        const user = action.payload?.user
        return { ...state, user }
      }

      default:
        return state
    }
  }
)


