import { AppProps } from 'next/app';
import { MoralisProvider } from 'react-moralis';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const moralis_app_id = process.env.NEXT_PUBLIC_MORALIS_APP_ID ?? '';
  const moralis_server = process.env.NEXT_PUBLIC_MORALIS_SERVER ?? '';

  return (
    <MoralisProvider serverUrl={moralis_server} appId={moralis_app_id}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
