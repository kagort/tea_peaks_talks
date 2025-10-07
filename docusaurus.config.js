// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tea Peaks Talks',
  tagline: 'История, тексты, размышления',
  favicon: '/img/favicon.ico',

  url: 'https://kagort.github.io',
  baseUrl: '/tea_peaks_talks/',

  organizationName: 'kagort',
  projectName: 'tea_peaks_talks',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Tea Peaks Talks',
        logo: {
          alt: 'Логотип',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/blog', label: 'Блог', position: 'left' },
          {
            href: 'https://github.com/kagort/tea_peaks_talks',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} Tea Peaks Talks`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  markdown: {
    hooks: {
      onBrokenMarkdownImages: 'warn',
    },
  },
};

export default config;