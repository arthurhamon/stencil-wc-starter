import { Hub } from '@sentry/browser';

export interface IBoot {
  sentry?: Hub;
  initSentry: () => void;
}
