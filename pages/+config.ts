// Vike Config: SSG (Pre-rendering) aktivieren für alle Seiten
import type { Config } from 'vike/types';
import vikeReact from 'vike-react/config';

export default {
  extends: vikeReact,
  prerender: true, // SSG für alle Seiten
  passToClient: ['pageContext', 'urlPathname']
} satisfies Config;
