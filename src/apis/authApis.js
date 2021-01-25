import axios from 'axios';

export function authenticate({username, password}) {
    return axios.request({
        headers: {
            'Access-Control-Allow-Origin': '*',
          },
        method: 'post',
        url: 'http://ec2-3-140-249-109.us-east-2.compute.amazonaws.com:3001/login',
        data: {
            "username": username,
            "password": password
        }
    })
}