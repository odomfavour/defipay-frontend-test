import axios from 'axios'
import { BaseModel } from '../models/BaseModel'
import { authEndpoints } from './AuthUrls'

// Server should return AuthModel
export function login(username: string, password: string) {
  return axios.post(authEndpoints.LOGIN_URL, { username, password })
}

// Server should return AuthModel
export function register(email: string, businessname: string, countrycode: string, password: string) {
  return axios.post(authEndpoints.REGISTER_URL, {
    email,
    businessname,
    countrycode,
    password
  })
}

export function validate(email: string, businessname: string, country: string) {
  return axios.post(authEndpoints.VALIDATION_URL, { email, businessname, country, })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post(authEndpoints.REQUEST_PASSWORD_URL + '/' + email, null)
}

export function resetPassword(password: string, confirmpassword: string, code: string | null | string[], userid: string | null | string[]) {
  return axios.post(authEndpoints.RESET_PASSWORD_URL, { password, code, userid, confirmpassword })
}


export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  // Check common redux folder => setupAxios
  return axios.get<BaseModel>(authEndpoints.GET_USER_BY_ACCESSTOKEN_URL)
}

export function confirmemail(userid: string, code: string) {
  return axios.post(authEndpoints.CONFIRMEMAIL_URL, {
    userid,
    code
  })
}

export function logOutUser() {
  // Authorization head should be fulfilled in interceptor.
  // Check common redux folder => setupAxios
  return axios.post(authEndpoints.LOGOUT_URL)
}