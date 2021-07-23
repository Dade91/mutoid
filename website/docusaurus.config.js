const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const lightCodeTheme = require('prism-react-renderer/themes/github')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Mutoid',
    tagline: 'Reactive library for state management, data fetching, caching with some utilities to use with React',
    url: 'https://facile-it.github.io/mutoid',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'facile.it', // Usually your GitHub org/user name.
    projectName: 'mutoid', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'Mutoid',
            logo: {
                alt: 'Mutoid: Reactive library for state management, data fetching, caching',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'getting-started',
                    position: 'left',
                    label: 'Docs',
                },
                { to: '/blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://www.npmjs.com/package/mutoid',
                    label: 'npm',
                    position: 'right',
                },
                {
                    href: 'https://github.com/facile-it/mutoid',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Reference',
                    items: [
                        {
                            label: 'Docs',
                            to: '/docs/getting-started',
                        },
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                    ],
                },
                {
                    title: 'Github',
                    items: [
                        {
                            label: 'Facile.it',
                            href: 'https://github.com/facile-it',
                        },
                        {
                            label: 'Mutoid',
                            href: 'https://github.com/facile-it/mutoid',
                        },
                        {
                            label: 'Changelog',
                            href: 'https://github.com/facile-it/mutoid/blob/master/CHANGELOG.md',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/FacileIt_Engr',
                        },
                        {
                            label: 'Blog Facile.it Engineering',
                            href: 'https://engineering.facile.it/',
                        },
                        {
                            label: 'Linkedin',
                            href: 'https://www.linkedin.com/company/facile-it/mycompany/',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Facile.it Engineering, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facile-it/mutoid/edit/master/website',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
}
