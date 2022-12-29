import axios, { AxiosResponse } from 'axios';
import config from 'config';

export const resetPassword = async (
  email: string,
  password: string,
  otp: number,
): Promise<string> => {
  let response: AxiosResponse<any>;

  response = await axios.patch(`${config.apiEndpoint}/forgot/reset-password`, {
    email: email,
    password: password,
    code: otp,
  });

  return response.data.data;
};
