import React, { useState } from 'react';
import { api } from '../services/apicall';

export const useProduct = () => {
  const [details, setdetails] = useState({
    response: [],
    error: null,
    loading: true,
  });
  const get = async () => {
    try {
      const products = await api.get('/products');
      console.log('products', products);
      setdetails({
        response: products,
        error: null,
        loading: false,
      });
    } catch (error) {
      setdetails({
        response: null,
        error: error.message,
        loading: false,
      });
    }
    //  finally {
    //   setdetails({
    //     data: null,
    //     loading: false,
    //     error:
    //   });
    // }
  };
  return { get, details };
};
