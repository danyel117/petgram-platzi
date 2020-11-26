import React, { useState, useEffect } from 'react';
import { getCategorias } from '@utils/api';

const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getCategorias().then((res) => {
      setCategories(res);
      setLoading(false);
    });
  }, []);

  return { categories, loading };
};

export default useCategoriesData;
