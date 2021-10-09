import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import Theme from '../global/styles/theme';
import { GlobalStyle } from '../global/styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
