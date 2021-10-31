import callAPI from "../config/api";
import { LoginTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export const setSignUp = async (data: FormData) => {
  const url = `${ROOT_API}/${API_VERSION}/auth/signup`;
  return callAPI({
    url,
    method: "POST",
    data,
  });
};
