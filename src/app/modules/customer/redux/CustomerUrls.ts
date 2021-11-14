import { config } from '../../../../apiBaseUrl'

const API_URL = config.url.apiUrl;

const CREATE_CUSTOMER = `${API_URL}/customer/createcustomer`
const GET_ONE_CUSTOMER = `${API_URL}/customer/getcustomer`
const GET_CUSTOMERS = `${API_URL}/customer/getcustomers`
const UPDATE_CUSTOMER = `${API_URL}/customer/updatecustomer/`


export const customerEndpoints = {
    CREATE_CUSTOMER,
    GET_ONE_CUSTOMER,
    GET_CUSTOMERS,
    UPDATE_CUSTOMER
};
