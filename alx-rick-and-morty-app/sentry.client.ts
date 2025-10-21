import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '', // set NEXT_PUBLIC_SENTRY_DSN in your env
  tracesSampleRate: 0.05,
  environment: process.env.NODE_ENV,
});

export default Sentry;
