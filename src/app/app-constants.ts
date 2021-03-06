import {HttpHeaders} from '@angular/common/http';
export const URL = 'https://itbigger.pythonanywhere.com/';
// export const URL = 'http://192.168.1.130:8000/';
export const API_URL = `${URL}api/v1/`;
export const PATH_COUNTRY_CODE = '../../assets/country_code.json';
export const TYPE_HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
/**
 * Config the time to show warning timeout popup.
 *
 * type {idle: number; timeout: number; ping: number}
 */
export const TIMEOUT_CONFIG = {idle: 1800, timeout: 31, ping: 5};
export const MessageType = {success: 'success', info: 'info', warning: 'warning', danger: 'danger'};

// Roles
export const IS_ADMIN = true;
export const NOT_ADMIN = false;

// Routing path
export const R_HOME_PATH = '';
export const R_LOGIN_PATH = 'login';
export const R_SIGNUP_PATH = 'signup';
export const R_TOPICS_PATH = `topics`;
export const R_TOPICS_ADD_PATH = `topics/add`;
export const R_BASHBOARD_PATH = `dashboard`;
export const R_DETAIL_PATH = `detail/`;
export const R_USERS_PATH = `users`;

// Api path
export const TOPICS_PATH = `topics/`;
export const LOGIN_PATH = 'login/';
export const SIGNUP_PATH = 'signup/';
export const USERS_PATH = `users/`;
export const VERIFY_SIGNIN_PATH = 'verify/signin/';
export const VERIFY_PHONE_PATH = 'verify/phone/';
export const VERIFY_FORGOT_PASS_PATH = 'verify/forgotpassword/';
export const VERIFY_RESEND_SMS_PATH = 'verify/resendsms/';
export const CHANGE_PHONE_PATH = 'change/phone/';
export const CHANGE_EMAIL_PATH = 'change/email/';
export const FORGOT_PASS_PHONE_PATH = 'forgotpassword/phone/';
export const FORGOT_PASS_EMAIL_PATH = 'forgotpassword/email/';
export const PRODUCT_PATH = `products/`;
export const PRODUCT_SIZE_PATH = `product/sizes/`;
export const PRODUCT_ITEM_PATH = `product/items/`;
export const PRODUCT_TYPE_PATH = `product/types/`;
export const PRODUCT_IMG_PATH = `product/pictures/`;

// Api key
export const KEY_SEARCH = `search`;
export const KEY_LIMIT = `limit`;
export const KEY_OFFSET = `offset`;

// Api value
export const VAL_LIMIT_SEARCH = 25;

// Response
export const RP_ID = 'id';
export const RP_RESULTS = 'results';
export const RP_COUNT = 'count';
export const RP_CODE = 'code';
export const RP_STATUS = 'status';
export const RP_MESSAGE = 'message';

export const APP_NAME = 'IBig';
export const LOGGED_IN_AS = 'You are logged in as ';
export const SEPARATOR = ' | ';
export const LOGOUT = 'Log Out';
export const HELP = 'Help';
export const ROLE_EDIT_SUFFIX = '-EDIT';
export const ROLE_VIEW_SUFFIX = '-VIEW';
export const WITHOUT_CHECK_ROLE_MODULES = [R_HOME_PATH, 'master'];
