import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import 'bootstrap/dist/css/bootstrap.min.css'

import '../styles/globals.css'
import "../styles/login.scss";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
