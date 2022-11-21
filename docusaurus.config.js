// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  url: 'https://github.com', // Your website URL
  baseUrl: '/snowball/',
  projectName: 'snowball',
  organizationName: 'slsnow',
  deploymentBranch: "gh-pages",
  title: 'Snowball',
  tagline: 'Unstoppable in the pursuit of accumulating knowledge.',
  //url: 'https://your-docusaurus-test-site.com',
  //url: 'http://snowmanpc',
  //baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/snowball-icon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.

  
  //trailingSlash: false,


  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  plugins: [[ require.resolve('docusaurus-lunr-search'), {
    languages: ['en']
  }]],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Snowball Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/snowball-icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Linux',
          },
          {
            href: 'https://github.com/slsnow/snowball',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'External Resources',
            items: [
              {
                label: 'Linux Journey',
                to: 'https://linuxjourney.com/',
              },
              {
                label: 'openSUSE Docs',
                to: 'https://doc.opensuse.org/',
              },
              {
                label: 'Ubuntu Server Docs',
                to: 'https://ubuntu.com/server/docs'
              },
              {
                label: 'Rocky Linux Documentation',
                to: 'https://docs.rockylinux.org/'
              },
            ],
          },
          {
            title: 'YouTube Resourcess',
            items: [
              {
                label: 'NetworkChuck',
                href: 'https://www.youtube.com/@NetworkChuck',
              },
              {
                label: 'tutoriaLinux',
                href: 'https://www.youtube.com/@tutoriaLinux',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/slsnow/snowball',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/6SYzGsNZrM',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Snowball. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;