import {  siteEndpoint } from './../global';
import axios from 'axios'

const api = axios.create(
  {
    baseURL: siteEndpoint, //set the base url on .env file
    timeout: 5000
  }
)

export const getPosts = () : string => {
  /**
   * make your request here
   */
  return ''
}