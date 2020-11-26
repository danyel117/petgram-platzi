import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ListOfCategories from '@components/ListOfCategories/ListOfCategories';
import ListOfPhotoCards from '@components/ListOfPhotoCards/ListOfPhotoCards';
export default function Home() {
  return (
    <div>
      <ListOfCategories />
      <ListOfPhotoCards />
    </div>
  );
}
