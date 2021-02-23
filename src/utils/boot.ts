import * as Sentry from '@sentry/browser';
import { Hub } from '@sentry/browser';
import { Env } from '@/interfaces/wc-config';
import { IBoot } from '@/interfaces/boot';
import { environment } from '@/utils/environment';

/**
 * Boot reference the app configuration,
 * insert here all the functtion that need
 * to be execute before the WC load.
 *
 * @export
 * @class Boot
 * @implements {IBoot}
 */
export class Boot implements IBoot {
  private _env: Env = 'prod';

  public sentry: Hub;

  constructor(env: Env) {
    this._env = env;
  }

  public initSentry() {
    // We init Sentry inside is own scope (HUB)
    // like that we can have multiple Sentry client in one page
    if (environment[this._env]?.sentry?.enabled) {
      const sentryClient = new Sentry.BrowserClient(environment[this._env].sentry.config);
      this.sentry = new Sentry.Hub(sentryClient);
    }
  }
}
