import React, { useState, useEffect } from 'react';
import Category from '@components/Category/Category';
import { List, Item } from './styles';
import { getCategorias } from '@utils/api';

const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategorias().then((res) => {
      setCategories(res);
    });
  }, []);
  return (
    <List>
      {categories.map((category, index) => {
        return (
          <Item key={index}>
            <Category {...category} />
          </Item>
        );
      })}
    </List>
  );
};

export default ListOfCategories;
