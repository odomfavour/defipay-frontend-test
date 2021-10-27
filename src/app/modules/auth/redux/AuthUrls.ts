import { config } from '../../../../apiBaseUrl'


const API_URL = config.url.apiUrl;

const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/account/getuser`
const LOGIN_URL = `${API_URL}/account/login`
const LOGOUT_URL = `${API_URL}/account/logout`
const CONFIRMEMAIL_URL = `${API_URL}/account/confirmemail`
const REFERESHUSER_URL = `${API_URL}/account/referesh`
const REGISTER_URL = `${API_URL}/account/register`
const VALIDATION_URL = `${API_URL}/account/validatemerchant`
const REQUEST_PASSWORD_URL = `${API_URL}/auth/forgot-password`

// const checkexistmerchant = apiUrl + "/account/checkmerchant";
// const forgotPassword = apiUrl + "/password/forgotpassword";
// const resetPassword = apiUrl + "/password/resetpassword";

// const changePassword = apiUrl + "/password/inapp_passwordchange";
// const passwordPolicy = apiUrl + "/password/passwordpolicy";

export const authEndpoints = {
    GET_USER_BY_ACCESSTOKEN_URL,
    LOGIN_URL,
    LOGOUT_URL,
    CONFIRMEMAIL_URL,
    REFERESHUSER_URL,
    REGISTER_URL,
    VALIDATION_URL,
    REQUEST_PASSWORD_URL,
    // passwordPolicy
};
