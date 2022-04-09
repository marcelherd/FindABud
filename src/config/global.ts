/**
 * Manages globally-available application configuration.
 *
 * @module
 * @author Marcel Herd
 */

import { getEnvironmentVariable } from '@helpers/environment';

const config = {
  auth0: {
    clientId: getEnvironmentVariable('AUTH0_CLIENT_ID'),
    clientSecret: getEnvironmentVariable('AUTH0_CLIENT_SECRET'),
    issuer: getEnvironmentVariable('AUTH0_ISSUER'),
  },
};

export default config;
