import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// ---------------------------------------------------------------------------
// PrepAI — Documentation site config
// Author: Ahsan Mahmood (https://aoneahsan.com)
// App: https://interviewpai.aoneahsan.com
// ---------------------------------------------------------------------------

const SITE_URL = 'https://interviewpai-docs.aoneahsan.com';
const APP_URL = 'https://interviewpai.aoneahsan.com';
const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.aoneahsan.interviewpai';

const config: Config = {
  title: 'PrepAI Docs',
  tagline: 'Coding drills, AI/peer/mentor mock interviews, peer reviews, and progress analytics — free, in your browser.',
  favicon: 'img/favicon.svg',

  // Production URL — served from Firebase Hosting + GitHub Pages.
  url: SITE_URL,
  baseUrl: '/',

  // GitHub metadata (drives edit-this-page links + OG tags)
  organizationName: 'aoneahsan',
  projectName: 'interview-preparation-app-docs',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  // SEO + AI-citability head tags. JSON-LD payloads (WebSite, Organization,
  // SoftwareApplication) help Google Rich Results, Perplexity, ChatGPT, and
  // Claude extract structured entity data when citing this documentation.
  headTags: [
    {
      tagName: 'link',
      attributes: { rel: 'canonical', href: `${SITE_URL}/` },
    },
    {
      tagName: 'meta',
      attributes: { name: 'application-name', content: 'PrepAI Docs' },
    },
    {
      tagName: 'meta',
      attributes: { name: 'apple-mobile-web-app-title', content: 'PrepAI Docs' },
    },
    {
      tagName: 'meta',
      attributes: { name: 'theme-color', content: '#3b82f6' },
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'PrepAI Documentation',
        url: SITE_URL,
        description:
          'Documentation for PrepAI — a zero-cost interview-preparation platform with coding drills, AI/peer/mentor mock interviews, peer reviews, progress analytics, and 50+ developer tools. Author: Ahsan Mahmood.',
        inLanguage: 'en',
        publisher: {
          '@type': 'Person',
          name: 'Ahsan Mahmood',
          url: 'https://aoneahsan.com',
          email: 'aoneahsan@gmail.com',
          sameAs: [
            'https://linkedin.com/in/aoneahsan',
            'https://github.com/aoneahsan',
            'https://www.npmjs.com/~aoneahsan',
          ],
        },
        license: 'https://opensource.org/licenses/MIT',
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'PrepAI',
        alternateName: 'Interview Preparation App',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Android, iOS, Web',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        url: APP_URL,
        downloadUrl: PLAY_URL,
        sameAs: [APP_URL, PLAY_URL],
        author: { '@type': 'Person', name: 'Ahsan Mahmood', url: 'https://aoneahsan.com' },
        description:
          'PrepAI is an interview-preparation platform: card-based coding drills across multiple language tracks, AI/peer/mentor mock interviews, peer code reviews, D3 progress analytics, gamification, and 50+ client-side developer tools. Free tier with optional Pro/Ultimate plans.',
      }),
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Ahsan Mahmood',
        alternateName: 'aoneahsan',
        url: 'https://aoneahsan.com',
        email: 'aoneahsan@gmail.com',
        sameAs: [
          'https://linkedin.com/in/aoneahsan',
          'https://github.com/aoneahsan',
          'https://www.npmjs.com/~aoneahsan',
          'https://aoneahsan.com',
        ],
        founder: { '@type': 'Person', name: 'Ahsan Mahmood' },
      }),
    },
  ],

  i18n: { defaultLocale: 'en', locales: ['en'] },

  trailingSlash: false,

  markdown: {
    mermaid: true,
    hooks: { onBrokenMarkdownLinks: 'warn' },
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/aoneahsan/interview-preparation-app-docs/edit/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          breadcrumbs: true,
        },
        blog: false,
        theme: { customCss: './src/css/custom.css' },
        sitemap: { changefreq: 'weekly', priority: 0.7, lastmod: 'date' },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    metadata: [
      { name: 'description', content: 'Documentation for PrepAI — free coding drills, AI/peer/mentor mock interviews, peer reviews, and progress analytics. Built by Ahsan Mahmood.' },
      { name: 'keywords', content: 'interview preparation, coding practice, mock interview, AI mock interview, peer code review, leetcode alternative, coding drills, javascript practice, typescript practice, technical interview, PrepAI, free interview prep, developer tools' },
      { name: 'author', content: 'Ahsan Mahmood' },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:creator', content: '@aoneahsan' },
      { name: 'twitter:site', content: '@aoneahsan' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'PrepAI Docs' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'article:author', content: 'Ahsan Mahmood' },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: { hideable: true, autoCollapseCategories: true },
    },
    navbar: {
      title: 'PrepAI',
      logo: {
        alt: 'PrepAI logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
        width: 32,
        height: 32,
      },
      items: [
        { type: 'docSidebar', sidebarId: 'mainSidebar', position: 'left', label: 'Docs' },
        { to: '/getting-started/quick-start', label: 'Quick Start', position: 'left' },
        { to: '/about-the-author', label: 'Author', position: 'right' },
        { href: APP_URL, label: 'Open App', position: 'right' },
        { href: PLAY_URL, label: 'Play Store', position: 'right' },
        { href: 'https://github.com/aoneahsan/interview-preparation-app-docs', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Introduction', to: '/intro' },
            { label: 'Getting Started', to: '/getting-started/installation' },
            { label: 'Quick Start', to: '/getting-started/quick-start' },
            { label: 'FAQ', to: '/faq' },
          ],
        },
        {
          title: 'Product',
          items: [
            { label: 'Open PrepAI', href: APP_URL },
            { label: 'Get it on Google Play', href: PLAY_URL },
            { label: 'Docs source', href: 'https://github.com/aoneahsan/interview-preparation-app-docs' },
          ],
        },
        {
          title: 'Built by Ahsan Mahmood',
          items: [
            { label: 'aoneahsan.com', href: 'https://aoneahsan.com' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/aoneahsan' },
            { label: 'GitHub', href: 'https://github.com/aoneahsan' },
            { label: 'npm packages', href: 'https://www.npmjs.com/~aoneahsan' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PrepAI. Documentation built with Docusaurus by Ahsan Mahmood.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript', 'jsx', 'tsx', 'yaml', 'diff'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
