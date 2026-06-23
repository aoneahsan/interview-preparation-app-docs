import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Sidebar layout for the PrepAI docs site. Every entry maps to a real Markdown
 * file under docs/. Keep this in sync when adding or removing pages — Docusaurus
 * throws on broken links by config.
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/account-and-sign-in',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'features/coding-practice',
        'features/mock-interviews',
        'features/peer-reviews',
        'features/dashboard-analytics',
        'features/developer-tools',
        'features/chat-rooms',
        'features/gamification',
        'features/notifications',
        'features/theme-customizer',
      ],
    },
    {
      type: 'category',
      label: 'How-to guides',
      collapsed: true,
      items: [
        'guides/first-coding-drill',
        'guides/ai-mock-interview',
        'guides/export-progress-pdf',
        'guides/configure-gemini-key',
        'guides/install-as-pwa',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: true,
      items: [
        'concepts/zero-cost-architecture',
        'concepts/privacy-and-data',
        'concepts/subscription-plans',
      ],
    },
    'faq',
    {
      type: 'category',
      label: 'About',
      collapsed: true,
      items: ['about-the-author'],
    },
  ],
};

export default sidebars;
