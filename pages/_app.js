import { GlobalStyle } from './GlobalStyles';
import Logo from '@components/Logo/Logo';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
