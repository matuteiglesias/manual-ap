import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manual Operativo de Agrupación',
  tagline: 'Diagnóstico, coordinación y ejecución en un solo lugar',
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
        {to: '/docs', label: 'Inicio docs', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Navegación',
          items: [
            {label: 'Inicio', to: '/'},
            {label: 'Documentación', to: '/docs'},
          ],
        },
        {
          title: 'Secciones clave',
          items: [
            {
              label: 'Diagnóstico',
              to: '/docs/agrupacion/diagnostico/analisis-critico-y-recomendaciones-estrategicas',
            },
            {
              label: 'Carriles y roles',
              to: '/docs/agrupacion/carriles-y-roles/mapa-carriles-operativos',
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
