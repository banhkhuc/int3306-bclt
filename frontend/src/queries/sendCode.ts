import axios, { AxiosResponse } from 'axios';
import config from 'config';

export const sendRegisterCode = async (
  email: string | undefined,
): Promise<string> => {
  let response: AxiosResponse<any>;
  response = await axios.post(`${config.apiEndpoint}/register/send-code`, {
    email: email,
  });

  return response.data.status;
};

export const sendForgotPasswordCode = async (
  email: string | undefined,
): Promise<string> => {
  let response: AxiosResponse<any>;
  response = await axios.post(`${config.apiEndpoint}/forgot/send-code`, {
    email: email,
  });

  return response.data.status;
};
