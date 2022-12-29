import axios, { AxiosResponse } from 'axios';
import config from 'config';
import { useQuery } from 'react-query';

export const getUsers = async (page: number, size: number): Promise<any> => {
  let response: AxiosResponse<any>;
  const token = sessionStorage.getItem('token');
  const authenticationHeader = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    response = await axios.get(
      `${config.apiEndpoint}/users/pagination?page=${page}&size=${size}`,
      authenticationHeader,
    );
  } catch (e) {
    return [];
  }
  return response.data.data;
};

export const useGetUsers = (page: number, size: number) =>
  useQuery(['getUsers', page, size], () => getUsers(page, size), {
    // enabled: false,
    refetchOnWindowFocus: false,
  });

export const searchUsers = async (query: string): Promise<any> => {
  if (query === '') return undefined;
  let response: AxiosResponse<any>;
  const token = sessionStorage.getItem('token');
  const authenticationHeader = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    response = await axios.get(
      `${config.apiEndpoint}/users/pagination?query=${query}`,
      authenticationHeader,
    );
  } catch (e) {
    return [];
  }
  return response.data.data;
};

export const useSearchUsers = (query: string) =>
  useQuery(['getUsers', query], () => searchUsers(query), {
    // enabled: false,
    refetchOnWindowFocus: false,
  });

export const getUserProfile = async (): Promise<any> => {
  let response: AxiosResponse<any>;
  response = await axios.get(`${config.apiEndpoint}/users/me`, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    },
  });

  return response.data.data;
};

export const useGetUserProfile = (queryOpts?: any) =>
  useQuery(['user/getUserProfile'], () => getUserProfile(), {
    ...queryOpts,
  });

export const changeProfile = async (newProfile: any): Promise<any> => {
  let response: AxiosResponse<any>;
  response = await axios.patch(
    `${config.apiEndpoint}/users/change-info`,
    {
      fullName: newProfile.fullName,
      phone: newProfile.phone,
      birthDay: newProfile.birthDay,
    },
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    },
  );

  return response.data.data;
};

export const useChangeProfile = (newProfile: any, queryOpts?: any) =>
  useQuery(['user/changeProfile'], () => changeProfile(newProfile), {
    refetchOnWindowFocus: false,
    enabled: false,
    ...queryOpts,
  });

export const verifyPassword = async (password: string): Promise<any> => {
  let response: AxiosResponse<any>;
  response = await axios.post(
    `${config.apiEndpoint}/users/verify-password`,
    {
      password: password,
    },
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    },
  );

  return response.data.data;
};

export const useVerifyPassword = (password: string, queryOpts?: any) =>
  useQuery(['user/verify-password'], () => verifyPassword(password), {
    refetchOnWindowFocus: false,
    enabled: false,
    ...queryOpts,
  });

export const changePassword = async (newPassword: string): Promise<any> => {
  let response: AxiosResponse<any>;
  response = await axios.patch(
    `${config.apiEndpoint}/users/change-password`,
    {
      password: newPassword,
    },
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      },
    },
  );

  return response.data.data;
};

export const useChangePassword = (newPassword: string, queryOpts?: any) =>
  useQuery(['user/change-password'], () => changePassword(newPassword), {
    refetchOnWindowFocus: false,
    enabled: false,
    ...queryOpts,
  });
