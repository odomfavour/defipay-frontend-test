import { config } from '../../../../apiBaseUrl'

const API_URL = config.url.apiUrl;

const GET_COUNTRIES = `${API_URL}/country/all`
const GET_STATES = `${API_URL}/state/getall`
const GET_INDUSTRIES = `${API_URL}/industry/getindustries`
const GET_BUSINESSTYPES = `${API_URL}/businesstype/getbusinesstypes`
const GET_INDUSTRIES_CATEGORIES = `${API_URL}/industry/getcategories`
export const merchantEndpoints = {
    GET_COUNTRIES,
    GET_INDUSTRIES,
    GET_BUSINESSTYPES,
    GET_INDUSTRIES_CATEGORIES,
    GET_STATES
};
