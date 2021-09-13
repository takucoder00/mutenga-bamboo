import axios from "axios";

export const apiEndpoint = 'https://admin.mutengabamboo.co.zw/api/';
export const siteEndpoint = 'https://admin.mutengabamboo.co.zw/';


export const apiClient = axios.create({
    baseURL: siteEndpoint,
    withCredentials: true,
    xsrfHeaderName: "XSRF-TOKEN",
});