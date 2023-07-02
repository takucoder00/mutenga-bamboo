import axios from "axios";



let mode = process.env.NODE_ENV


export const apiEndpoint = mode == "development" ? 'http://localhost:8000/api' : 'https://dash.mutengabamboo.co.zw/api/';
export const siteEndpoint = mode == "development" ? 'http://localhost:3000/' : 'https://admin.mutengabamboo.co.zw/';
export const storageEndpoint = mode == "development" ? 'http://localhost:8000/storage' : "https://dash.mutengabamboo.co.zw/storage";




export const apiClient = axios.create({
    baseURL: siteEndpoint,
    withCredentials: true,
    xsrfHeaderName: "XSRF-TOKEN",
});