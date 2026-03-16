import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manual Operativo de Agrupación',
  tagline: 'Manual, memorias y lecciones para coordinar la agrupación',
  favicon: 'img/favicon.ico',
  future: {v4: true},
  url: 'https://manual-ap.example.com',
  baseUrl: '/',
  organizationName: 'manual-ap',
  projectName: 'manual-ap',
  onBrokenLinks: 'warn',
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Manual AP',
      logo: {
        alt: 'Manual AP',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentación',
        },
        {to: '/docs/intro', label: 'Inicio docs', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Navegación',
          items: [
            {label: 'Inicio', to: '/'},
            {label: 'Documentación', to: '/docs/intro'},
          ],
        },
        {
          title: 'Secciones clave',
          items: [
            {
              label: 'Manual operativo',
              to: '/docs/agrupacion/manual-operativo/carriles-operativos',
            },
            {
              label: 'Memorias del chat',
              to: '/docs/agrupacion/memorias-del-chat/por-periodo/ago-a-sep-2025',
            },
          ],
        },
      ],
      copyright: `Manual AP · ${new Date().getFullYear()} · Documentación curada con trazabilidad de fuentes.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
