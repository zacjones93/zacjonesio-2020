const config = require('./config/website')
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
    title: config.siteTitle,
    description: config.siteDescription,
    keywords: ['Video Blogger'],
    canonicalUrl: config.siteUrl,
    twitterUrl: config.twitterUrl,
    twitterHandle: config.twitterHandle,
    fbAppID: config.fbAppID,
    githubUrl: config.githubUrl,
    githubHandle: config.githubHandle,
    image: config.siteLogo,
    author: {
      name: config.author,
      minibio: `
        The various interests documented by <strong>Zac</strong>.
      `,
    },
    organization: {
      name: config.organization,
      url: config.siteUrl,
      logo: config.siteLogo,
    },
  },
  plugins: [
    `@eggheadio/gatsby-theme-egghead-blog`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://gmail.us20.list-manage.com/subscribe/post?u=1561fdb01881ed94c00a3fd09&amp;id=2ad2765dc0', // see instructions section below
      },
    },
  ],
}