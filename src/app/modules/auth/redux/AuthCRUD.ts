import axios from 'axios'
import { AuthModel } from '../models/AuthModel'
import { UserModel } from '../models/UserModel'
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
  return axios.post<{ result: boolean }>(authEndpoints.REQUEST_PASSWORD_URL, { email })
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  // Check common redux folder => setupAxios
  return axios.get<UserModel>(authEndpoints.GET_USER_BY_ACCESSTOKEN_URL)
}

export function confirmemail(userid: string, callcode: string) {
  return axios.post<AuthModel>(authEndpoints.CONFIRMEMAIL_URL, {
    userid,
    callcode
  })
}
