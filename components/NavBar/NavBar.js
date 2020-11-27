import React from 'react';
import {Nav, A} from './styles'
import Link from 'next/link';
import {MdHome,MdFavoriteBorder, MdPersonOutline} from 'react-icons/md'
const SIZE='32px'
const NavBar = () => {
    return (
      <Nav>
        <Link href={'/'}>
            <A>
                <MdHome size={SIZE} />
            </A>
        </Link>
        <Link href={'/favs'}>
            <A>
                <MdFavoriteBorder size={SIZE} />
            </A>
        </Link>
        <Link href={'/user'}>
            <A>
                <MdPersonOutline size={SIZE} />
            </A>
        </Link>
      </Nav>
    );
}
 
export default NavBar;