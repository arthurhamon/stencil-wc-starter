import i18next, { Resource } from 'i18next';
import Cookies from 'cookies-ts';
import { environment } from '@/utils/environment';

const $cookies = new Cookies();

import de from "../i18n/de.json";
import en from "../i18n/en.json";
import es from "../i18n/es.json";
import fr from "../i18n/fr.json";
import it from "../i18n/it.json";
import us from "../i18n/us.json";
const Locales = { de, en, es, fr, it, us };

const resources: Resource = Object.keys(Locales).reduce((prev, curr) => {
  prev[curr] = { translation: Locales[curr] };
  return prev;
}, {});

i18next.init({
  lng: $cookies.isKey('app_locale') ? $cookies.get('app_locale') : environment.i18n.locale,
  fallbackLng: environment.i18n.fallback || 'us',
  load: 'languageOnly',
  resources,
  keySeparator: false,
});

export default i18next;
