import axios, { type AxiosRequestConfig, type ResponseType } from "axios";

interface Client {
  data?: unknown | undefined;
  method?: string | undefined;
  url: string | undefined;
  params?: string | undefined | object;
  body?: unknown | undefined;
  headers?:
    | {
        [key: string]: string;
      }
    | undefined;
  responseType?: ResponseType;
}

const REQUEST_TIMEOUT = 10000;

const API = axios.create({
  baseURL: "https://idykvrachy.ru/api/",
  timeout: REQUEST_TIMEOUT,
  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
  },
});

export const ApiClient = async ({
  data,
  method = "GET",
  url,
  params,
  headers,
  responseType = "json",
}: Client) => {
  const requestParams: AxiosRequestConfig = {
    method,
    url,
    params,
    data,
    responseType,
  };

  API.defaults.headers = { ...API.defaults.headers, ...headers };

  return API(requestParams)
    .then((res) => ({ data: res.data, status: res.status }))
    .catch((err) => {
      console.error(
        "\nERROR MESSAGE:",
        err.response.data.message,
        `\nSTATUS: ${err.response.data.status}`
      );

      return { data: "isError", status: err.response.status };
    });
};
