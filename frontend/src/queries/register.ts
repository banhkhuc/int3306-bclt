import axios, { AxiosResponse } from 'axios';
import config from 'config';

export const register = async (
  email: string,
  password: string,
  otp: number,
  fullName: string,
  phone: string,
  birthDay: string,
): Promise<string> => {
  let response: AxiosResponse<any>;

  response = await axios.post(`${config.apiEndpoint}/register`, {
    email: email,
    password: password,
    code: otp,
    fullName: fullName,
    phone: phone,
    birthDay: birthDay,
  });

  return response.data.status;
};
