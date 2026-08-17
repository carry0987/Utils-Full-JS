import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
    title: 'Utils-Full-JS',
    tagline: 'A browser-first utility surface with extendable instances and static helpers',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://carry0987.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/Utils-Full-JS/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'carry0987',
    projectName: 'Utils-Full-JS',

    // The broken links detection is only available for a production build
    onBrokenLinks: 'throw',

    // Global markdown configuration
    markdown: {
        hooks: {
            onBrokenMarkdownLinks: 'warn',
            onBrokenMarkdownImages: 'throw',
        },
    },

    // Add custom tags to the HTML head
    headTags: [
        {
            tagName: 'meta',
            attributes: {
                name: 'algolia-site-verification',
                content: '561738E61B6C302E',
            },
        },
    ],

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            '@docusaurus/preset-classic',
            {
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                },
                docs: {
                    sidebarPath: './sidebars.ts',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    editUrl: 'https://github.com/carry0987/Utils-Full-JS/tree/gh-pages/',
                },
                blog: false,
                theme: {
                    customCss: './src/css/global.custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        navbar: {
            title: 'Utils-Full-JS',
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Docs',
                },
                {
                    to: '/docs/browser-utilities',
                    label: 'Browser API',
                    position: 'left',
                },
                {
                    href: 'https://github.com/carry0987/Utils-Full-JS',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'light',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Overview',
                            to: '/docs/intro',
                        },
                        {
                            label: 'Getting Started',
                            to: '/docs/getting-started',
                        },
                    ],
                },
                {
                    title: 'API',
                    items: [
                        {
                            label: 'Core Methods',
                            to: '/docs/universal-utilities',
                        },
                        {
                            label: 'Browser Utilities',
                            to: '/docs/browser-utilities',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/carry0987/Utils-Full-JS',
                        },
                        {
                            label: 'npm',
                            href: 'https://www.npmjs.com/package/@carry0987/utils-full',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} carry0987. Built with Docusaurus.`,
        },
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false,
            respectPrefersColorScheme: true,
        },
        prism: {
            theme: prismThemes.oneDark,
            darkTheme: prismThemes.oneDark,
            additionalLanguages: ['tsx', 'css', 'json', 'bash'],
        },
        liveCodeBlock: {
            playgroundPosition: 'bottom',
        },
        algolia: {
            appId: 'Y5JTTYTBGG',
            apiKey: '0b07c7bfaa04f91821ebba63bfb17e66',
            indexName: 'Utils-Full-JS Index',
            contextualSearch: true,
            externalUrlRegex: 'external\\.com|domain\\.com',
            searchParameters: {},
            searchPagePath: 'search',
            insights: false,
        }
    } satisfies Preset.ThemeConfig,
    themes: ['@docusaurus/theme-live-codeblock'],
};

export default config;
