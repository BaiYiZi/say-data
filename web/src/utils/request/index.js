import axios from "axios"

const request = axios.create({
  // baseURL: 'http://127.0.0.1:4523/m1/3096825-0-default',
  baseURL: 'http://114.115.202.226:8081',

  headers: {
    "Content-type": "application/json;charset=UTF-8"
  },
  timeout: 10000,
})

export default request