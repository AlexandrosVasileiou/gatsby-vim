module.exports = {
  siteMetadata: {
    title: `Gatsby Vim`,
    description: `A minimal, Vim inspired Gatsby theme, following the Gruvbox color scheme.`,
    author: `@alexvasileioy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-vim`,
        short_name: `gatsby-vim`,
        start_url: `/`,
        background_color: `#282828`,
        theme_color: `#282828`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
