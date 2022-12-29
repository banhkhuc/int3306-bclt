import axios, { AxiosResponse } from 'axios';
import config from 'config';

export const validateEmail = async (
  email: string,
): Promise<string | boolean> => {
  let response: AxiosResponse<any>;

  if (email == '') {
    return 'unfilled_email';
  }
  response = await axios.post(`${config.apiEndpoint}/register/check-email`, {
    email: email,
  });

  return response.data.data;
};
