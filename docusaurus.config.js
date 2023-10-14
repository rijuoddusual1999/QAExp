// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Riju Mondal',
  tagline: 'My QA Experience',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://rijuoddusual1999.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/QAExp/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rijuoddusual1999', // Usually your GitHub org/user name.
  projectName: 'QAExp', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/rijuoddusual1999/QAExp/tree/master',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'QA_Experience_in Cognizant',
        logo: {
          alt: 'QA Experience Site',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Experience',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Experience',
                to: '/',
              },
            ],
          },
          {
            title: 'Profiles',
            items: [
              {
                href: 'https://github.com/facebook/docusaurus',
                label: 'GitHub',
                position: 'right',
              },
              {
                href: 'https://leetcode.com/riju1/',
                label: 'Leetcode',
                position: 'right',
              },
              {
                href: 'https://www.linkedin.com/in/riju-mondal-137686244/',
                label: 'Linkedin',
                position: 'right',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Riju Mondal`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
