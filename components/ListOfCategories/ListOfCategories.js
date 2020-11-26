import React, { useState, useEffect } from 'react';
import Category from '@components/Category/Category';
import { List, Item } from './styles';
import { getCategorias } from '@utils/api';
import { render } from 'react-dom';

const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    getCategorias().then((res) => {
      setCategories(res);
    });
  }, []);

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      newShowFixed !== showFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [showFixed]);

  const renderList = (fixed) => {
    return (
      <List className={fixed ? 'fixed' : ''}>
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

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};

export default ListOfCategories;
