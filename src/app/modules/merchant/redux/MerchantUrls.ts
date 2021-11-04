import { config } from '../../../../apiBaseUrl'


const API_URL = config.url.apiUrl;

const GET_COUNTRIES = `${API_URL}/country/all`
const GET_INDUSTRIES = `${API_URL}/account/login`

export const merchantEndpoints = {
    GET_COUNTRIES,
    GET_INDUSTRIES
};
