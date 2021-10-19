import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Theme from '../global/styles/theme';
import { GlobalStyle } from '../global/styles/global';

import TranslateProvider from '../contexts/translateGlobal';
import MenuProvider from '../contexts/menuGlobal';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <TranslateProvider>
        <MenuProvider>
          <Component {...pageProps} />
        </MenuProvider>
      </TranslateProvider>
    </ThemeProvider>
  );
}
export default MyApp;
