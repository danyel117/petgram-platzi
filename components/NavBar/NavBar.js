import React from 'react';
import {Nav, A} from './styles'
import { useRouter } from 'next/router';
import Link from 'next/link';
import {MdHome,MdFavoriteBorder, MdPersonOutline} from 'react-icons/md'
const SIZE='32px'
const NavBar = () => {
      const router = useRouter();
    return (
      <Nav>
        <Link href={'/'}>
          <A className={router.route === '/' ? 'selected' : ''}>
            <MdHome size={SIZE} />
          </A>
        </Link>
        <Link href={'/favs'}>
          <A className={router.route === '/favs' ? 'selected' : ''}>
            <MdFavoriteBorder size={SIZE} />
          </A>
        </Link>
        <Link href={'/user'}>
          <A className={router.route === '/user' ? 'selected' : ''}>
            <MdPersonOutline size={SIZE} />
          </A>
        </Link>
      </Nav>
    );
}
 
export default NavBar;