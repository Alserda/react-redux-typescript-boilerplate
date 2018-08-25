import axios, { AxiosPromise, AxiosInstance } from 'axios';


export default class HTTPClient {
  public static client: AxiosInstance = axios.create({
    baseURL: BACKEND_URL,
    responseType: 'json',
    headers: {
      Accept: 'application/json',
    },
  });

  public static fetch(url: string): AxiosPromise {
    return HTTPClient.client.get(url);
  }

  public static post(url: string, payload: any): AxiosPromise {
    return HTTPClient.client.post(url, payload);
  }

  public static put(url: string, payload?: any): AxiosPromise {
    return HTTPClient.client.put(url, payload);
  }

  public static delete(url: string): AxiosPromise {
    return HTTPClient.client.delete(url);
  }
}
