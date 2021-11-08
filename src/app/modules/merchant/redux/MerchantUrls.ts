import { config } from '../../../../apiBaseUrl'

const API_URL = config.url.apiUrl;

const GET_COUNTRIES = `${API_URL}/country/all`
const GET_INDUSTRIES = `${API_URL}/industry/getindustries`
const GET_BUSINESSTYPES = `${API_URL}/businesstype/getbusinesstypes`

export const merchantEndpoints = {
    GET_COUNTRIES,
    GET_INDUSTRIES,
    GET_BUSINESSTYPES
};
