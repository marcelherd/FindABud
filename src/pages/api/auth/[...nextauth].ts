import NextAuth from 'next-auth/next';
import Auth0Provider from 'next-auth/providers/auth0';

import config from '@config/global';

export default NextAuth({
  providers: [
    Auth0Provider({
      clientId: config.auth0.clientId,
      clientSecret: config.auth0.clientSecret,
      issuer: config.auth0.issuer,
    }),
  ],
});
