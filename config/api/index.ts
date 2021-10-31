import axios, { AxiosRequestConfig } from "axios";

const callAPI = async ({ url, method, data }: AxiosRequestConfig) => {
  const response = await axios({
    url,
    method,
    data,
  }).catch((err) => err.response);

  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }
  const res = {
    error: false,
    message: response.data.message,
    data: response.data.data,
  };
  return res;
};

export default callAPI;
