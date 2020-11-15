// .vuepress/config.js
module.exports = {
  plugins: [
    ['vuepress-plugin-reading-time', true],
    [
      'vuepress-plugin-container',
      {
        type: 'notice',
        before: info => `<div class="notice"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],
  ],
  title: 'ocular-d Blog', // Title for the site. This will be displayed in the navbar.
  theme: '@vuepress/theme-blog',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/ocular-d',
        }
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © ocular-d'
        },
      ],
    },
    feed: {
      canonical_base: 'https://blog.ocular-d.tech/'
    },
    sitemap: {
      hostname: 'https://blog.ocular-d.tech'
    },
    smoothScroll: true,
    summary: false,
    searchPlaceholder: 'Search...',
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/ocular-d',
      },
    ]
  }
}
