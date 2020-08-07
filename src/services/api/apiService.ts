import Axios from "axios-observable";
import { setupInterceptors } from "./apiInterceptor";

const bindInserceptor = setupInterceptors();

export const APIR = Axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

APIR.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";

bindInserceptor(APIR);
