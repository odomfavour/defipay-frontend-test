import { actionTypes } from "./AuthActionTypes"
import { UserModel } from '../models/UserModel'
import { MerchantRegisterModel } from '../models/MerchantRegisterModel'
export const actions = {
    login: (accessToken: string) => ({ type: actionTypes.Login, payload: { accessToken } }),
    register: (accessToken: string) => ({
        type: actionTypes.Register,
        payload: { accessToken },
    }),
    logout: () => ({ type: actionTypes.Logout }),
    confirmemail: () => ({ type: actionTypes.ConfirmEmail }),
    passwordchanged: (passwordChanged: boolean) => ({ type: actionTypes.ConfirmEmail }),
    verifyemail: (merchant: MerchantRegisterModel) => ({ type: actionTypes.VerifyEmail, payload: { merchant } }),
    requestUser: () => ({
        type: actionTypes.UserRequested,
    }),
    fulfillUser: (user: UserModel) => ({ type: actionTypes.UserLoaded, payload: { user } }),
    setUser: (user: UserModel) => ({ type: actionTypes.SetUser, payload: { user } }),
}