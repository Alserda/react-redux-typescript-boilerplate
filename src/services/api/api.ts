import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import Config from 'constants/Config';

export default class API {
  public static readonly baseURL: string = Config.BASE_URL;
  public static readonly config: AxiosRequestConfig = {
    headers: {
      Accept: 'application/json',
    },
  };

  public static fetch(url: string): AxiosPromise {
    return axios.get(`${API.baseURL}${url}`, API.config);
  }
}