import { config } from '../../../../apiBaseUrl'

const API_URL = config.url.apiUrl;

const CREATE_ONETIME_CHECKOUT = `${API_URL}/one-time-checkout/create`
const GET_ONETIME_CHECKOUTS = `${API_URL}/one-time-checkout/get-all`
const GET_ONETIME_CHECKOUT = `${API_URL}/one-time-checkout/get-payment-details-from-link`


export const checkoutEndpoints = {
    CREATE_ONETIME_CHECKOUT,
    GET_ONETIME_CHECKOUTS,
    GET_ONETIME_CHECKOUT
};
