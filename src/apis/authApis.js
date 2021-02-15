import axios from 'axios';
require('dotenv').config();

export function authenticate({username, password}) {
    return axios.request({
        headers: {
            'Access-Control-Allow-Origin': '*',
          },
        method: 'post',
        url: process.env.REACT_APP_URL_AUTHENTICATE,
        data: {
            "username": username,
            "password": password
        }
    })
}

export function signup({username, password, firstname, lastname}) {
    return axios.request({
        headers: {
            'Access-Control-Allow-Origin': '*',
          },
        method: 'post',
        url: process.env.REACT_APP_URL_SIGNUP,
        data: {
            "username": username,
            "password": password,
            "firstname" : firstname,
            "lastname" : lastname
        }
    })
}


export function verification({username, verificationCode}) {
    return axios.request({
        headers: {
            'Access-Control-Allow-Origin': '*',
          },
        method: 'post',
        url: process.env.REACT_APP_URL_VERIFICATION,
        data: {
            "username": username,
            "verificationCode": verificationCode
        }
    })
}

export function resendVerificationCode(username) {
    return axios.request({
        headers: {
            'Access-Control-Allow-Origin': '*',
          },
        method: 'get',
        url: process.env.REACT_APP_URL_RESEND_VERIFICATION_CODE+username,
    })
}

export function sendResetPasswordEmail(username) {
    return axios.request({
        headers: {
            'Access-Control-Allow-Origin': '*',
          },
        method: 'get',
        url: process.env.REACT_APP_URL_SEND_RESET_PASSWORD_EMAIL+username,
    })
}

export function resetPassword({uuid, password}) {
    return axios.request({
        headers: {
            'Access-Control-Allow-Origin': '*',
          },
        method: 'post',
        url: process.env.REACT_APP_URL_RESET_PASSWORD,
        data: {
            "uuid": uuid,
            "password": password
        }
    })
}