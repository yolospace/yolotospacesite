import * as React from 'react';
import { useEffect } from 'react';
import { useMoralis } from 'react-moralis';

import Seo from '@/components/Seo';

export default function HomePage() {
  const { authenticate, isAuthenticated } = useMoralis();
  useEffect(() => {
    if (isAuthenticated) {
      // add your logic here
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: 'Log in using Moralis' });
    }
  };

  return (
    <div>
      <Seo title='Home' />
      <button onClick={login}>Moralis Metamask Login</button>
      <h1 className='text-red-300'>Hello Next.js</h1>
    </div>
  );
}
