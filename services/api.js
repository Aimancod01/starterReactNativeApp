import axios from 'axios';
import {BASE_URL} from '../config/env';
import Toast from 'react-native-toast-message';

const apiRequest = async ({method, url, data, headers, params, navigation}) => {
  try {
    const response = await axios({
      method,
      url: `${BASE_URL}/${url}`,
      data,
      headers,
      params,
    });

    return response.data;
  } catch (error) {
    console.log(error.response?.data);
    if (axios.isAxiosError(error) && error.response) {
      const status = error.response.data.status;

      if (status === 401) {
        Toast.show({
          type: 'error',
          text1: 'Unauthorized User',
          position: 'top',
        });
        if (navigation) navigation.navigate('Login');
      } else if (status === 422) {
        Toast.show({
          type: 'error',
          text1:
            error.response?.data?.errors?.[0]?.message ||
            'Something went wrong. Please try again.',
          position: 'top',
        });
      } else if (status !== 404) {
        // Skip toast if status is 404
        Toast.show({
          type: 'error',
          text1:
            error.response?.data?.message ||
            error.response?.data?.errors?.[0]?.message ||
            'Something went wrong. Please try again.',
          position: 'top',
        });
      }
    } else {
      console.error('API Error:', error);
      Toast.show({
        type: 'error',
        text1: 'API Error',
        position: 'top',
      });
    }

    throw error;
  }
};

export const getRequest = (url, params, headers, navigation) =>
  apiRequest({
    method: 'GET',
    url,
    params,
    headers,
    navigation,
  });

export const postRequest = (url, data, headers, navigation) =>
  apiRequest({
    method: 'POST',
    url,
    data,
    headers,
    navigation,
  });

export const putRequest = (url, data, headers, navigation) =>
  apiRequest({
    method: 'PUT',
    url,
    data,
    headers,
    navigation,
  });

export const deleteRequest = (url, headers, navigation) =>
  apiRequest({
    method: 'DELETE',
    url,
    headers,
    navigation,
  });
