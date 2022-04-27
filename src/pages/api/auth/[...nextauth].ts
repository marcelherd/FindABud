import NextAuth from 'next-auth/next';
import Auth0Provider from 'next-auth/providers/auth0';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import config from '@/config/global';
import { prisma } from '@/lib/database';

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Auth0Provider({
      clientId: config.auth0.clientId,
      clientSecret: config.auth0.clientSecret,
      issuer: config.auth0.issuer,
    }),
  ],
});
