import React, { useState, useEffect } from 'react';
import Category, { CategorySkeleton } from '@components/Category/Category';
import { List, Item } from './styles';
import useCategoriesData from 'hooks/useCategoriesData';

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

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
      <List fixed={fixed}>
        {loading ? (
          <>
            <Item>
              <CategorySkeleton />
            </Item>
            <Item>
              <CategorySkeleton />
            </Item>
            <Item>
              <CategorySkeleton />
            </Item>
            <Item>
              <CategorySkeleton />
            </Item>
          </>
        ) : (
          <>
            {categories.map((category, index) => {
              return (
                <Item key={index}>
                  <Category cover={category.foto} {...category} />
                </Item>
              );
            })}
          </>
        )}
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

export default React.memo(ListOfCategoriesComponent);
