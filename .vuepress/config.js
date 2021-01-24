// .vuepress/config.js
module.exports = {
  plugins: [
    ['vuepress-plugin-reading-time', true],
    ['@xiaopanda/vuepress-plugin-code-copy', true],
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
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['link', {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i'
  },],
  ['link', {
    rel: 'stylesheet',
    type: 'text/css',
    href: 'https://fonts.googleapis.com/css?family=Miriam+Libre:400,700'
},]
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
    sidebarDepth: 1,
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
