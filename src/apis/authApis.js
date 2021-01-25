import axios from 'axios';

export function authenticate({username, password}) {
    return axios.request({
        headers: {
            'Access-Control-Allow-Origin': '*',
          },
        method: 'post',
        url: 'http://localhost:3001/login',
        data: {
            "username": username,
            "password": password
        }
    })
}