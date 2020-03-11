import axios, { AxiosRequestConfig } from "axios";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

interface FetchApiProps extends AxiosRequestConfig {
  customHeaders?: object;
}

export async function fetchApi({
  method,
  url,
  data = null,
  headers = null,
  customHeaders,
  ...restProps
}: FetchApiProps) {

  let config = {
    method: method,
    url: `${baseUrl}${url}`,
    data: data
  };

  const defaultHeaders = {
    Accept: "application/json"
  };

  let withBearerHeader = null;
  let jointHeaders = null;

  withBearerHeader = {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
  };

  jointHeaders = {
    ...defaultHeaders,
    headers: {
      ...customHeaders,
      ...withBearerHeader
    }
  };

  try {
    return axios({
      ...config,
      ...jointHeaders,
      ...restProps
    });
  } catch (error) {
    return error;
  }
}
