import Axios from "axios-observable";

export const APIR = Axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}api/`,
});

APIR.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
