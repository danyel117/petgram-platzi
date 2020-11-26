import React from 'react';
import Link from 'next/link';
import { Anchor, Image } from './styles';
import { ContainerCategorySkeleton, CategoryImage, CategoryTitle } from './styles';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

const Category = ({ cover = DEFAULT_IMAGE, path = '', emoji = '?' }) => {
  return (
    <div>
      <Link href={path}>
        <Anchor>
          <Image src={cover} />
          {emoji}
        </Anchor>
      </Link>
    </div>
  );
};

export default Category;

export const CategorySkeleton = (props) => {
  return (
    <ContainerCategorySkeleton>
      <CategoryImage light={props.light} />
      <CategoryTitle light={props.light} />
    </ContainerCategorySkeleton>
  );
};
