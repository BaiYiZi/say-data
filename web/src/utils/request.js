import axios from "axios";

let request = axios.create({
    baseURL: "http://114.115.202.226:8081",
    // baseURL: "https://c0ecdbb9-f588-48f9-8db5-fc658e70d14d.mock.pstmn.io",
    timeout: 30 * 1000,
    responseType: "json",
    headers: {
        "Content-type": "application/json;charset=UTF-8"
    },
})

export default request;