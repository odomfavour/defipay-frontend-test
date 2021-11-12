import { config } from '../../../../apiBaseUrl'

const API_URL = config.url.apiUrl;

const CREATE_ONE_TIMEPAYMENT = `${API_URL}/onetimepayment/createpaymentpage`

//Payment Plan
const CREATE_PAYMENT_PLAN = `${API_URL}/paymentplan/createpaymentplan`
const UPDATE_PAYMENT_PLAN = `${API_URL}/paymentplan/updatepaymentplan`
const GET_PAYMENT_PLAN_BY_ID = `${API_URL}/paymentplan/getpaymentplan/{planid}`
const GET_ALL_PAYMENT_PLANS = `${API_URL}/paymentplan/getpaymentplan`

//Subscription
const CREATE_OSUBSCRIPTION_PAYMENT_PAGE = `${API_URL}/subcriptionpaymentpage/createsubscriptionpaymentpage`
export const paymentEndpoints = {
    CREATE_ONE_TIMEPAYMENT,
    CREATE_PAYMENT_PLAN,
    UPDATE_PAYMENT_PLAN,
    GET_PAYMENT_PLAN_BY_ID,
    GET_ALL_PAYMENT_PLANS,
    CREATE_OSUBSCRIPTION_PAYMENT_PAGE
};
