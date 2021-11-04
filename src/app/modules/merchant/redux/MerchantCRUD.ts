import axios from 'axios'
import { CountryModel } from '../models/country/CountryModel'
import { merchantEndpoints } from './MerchantUrls'

// Server should return AuthModel
export function getcountries() {
    return axios.get(merchantEndpoints.GET_COUNTRIES)
}


// export function getindustris() {
//     return axios.get<CountryModel>(merchantEndpoints.GET_COUNTRIES)
// }
