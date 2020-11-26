import React from 'react';
import Link from 'next/link';
import { Anchor, Image } from './styles';

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
