import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

interface CallAPIProps extends AxiosRequestConfig {
  token?: boolean;
  serverToken?: string;
}

const callAPI = async ({
  url,
  method,
  data,
  token,
  serverToken,
}: CallAPIProps) => {
  let headers = {};

  if (token) {
    const tokenCookies = Cookies.get("token");
    if (tokenCookies) {
      const jwtToken = atob(tokenCookies);
      headers = {
        Authorization: `Bearer ${jwtToken}`,
      };
    }
  }

  if (serverToken) {
    headers = {
      Authorization: `Bearer ${serverToken}`,
    };
  }

  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);

  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }

  const { length } = Object.keys(response.data);

  const res = {
    error: false,
    message: response.data.message,
    data: length > 1 ? response.data : response.data.data,
  };
  return res;
};

export default callAPI;
