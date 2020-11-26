import React from 'react';
import Category from '@components/Category/Category';
import { List, Item } from './styles';

import { categories } from './testdb.json';

const ListOfCategories = () => {
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
