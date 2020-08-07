const onRequest = (config: any) => {
  const token = process.env.REACT_APP_TOKEN;
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }
  return config;
};

const onResponseSuccess = (response: any) => {
  return response;
};

const onResponseError = (err: any) => {
  return Promise.reject(err);
};

export const setupInterceptors = () => {
  return (API: any) => {
    API.interceptors.request.use(onRequest);
    API.interceptors.response.use(onResponseSuccess, onResponseError);
  };
};
