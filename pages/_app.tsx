import GlobalStyles from '../styles/GlobalStyles'
import Head from 'next/head'
import Script from 'next/script'

const App = ({ Component, pageProps }) => (
  <>
    <Script
      id="googletagmanager-js-script"
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
    />

    <Script id="gtag-send-data" strategy="lazyOnload">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
    </Script>

    <GlobalStyles />

    <Head>
      <title>SubZero TC Repair</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Component {...pageProps} />
  </>
)

export default App
