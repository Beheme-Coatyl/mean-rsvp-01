// src/app/auth/auth.config.ts

import { ENV } from './../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SCOPE: string;
  NAMESPACE: string;
  SILENT_REDIRECT: string;
}

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: '<AUTH0-client-id>',
  CLIENT_DOMAIN: '<AUTH0-client-domain>',
  AUDIENCE: '<API_SERVER>/api',
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SCOPE: 'openid profile',
  NAMESPACE: 'http://myapp.com/roles',
  SILENT_REDIRECT: '<API_SERVER>/silent'
};
