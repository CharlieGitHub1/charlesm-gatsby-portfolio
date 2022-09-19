module.exports = {
  siteMetadata: {
    title: `Charles M Port`,
    description: `A UI/UX Designer and Front-End Developer`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `video`,
        path: `${__dirname}/static/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    // {
    //   resolve: `gatsby-source-sanity`,
    //   options: {
    //     projectId: `abc123`,
    //     dataset: `blog`,
    //     // a token with read permissions is required
    //     // if you have a private dataset
    //     token: process.env.SANITY_TOKEN,

    //     // If the Sanity GraphQL API was deployed using `--tag <name>`,
    //     // use `graphqlTag` to specify the tag name. Defaults to `default`.
    //     graphqlTag: 'default',
    //   }
    // },
  ],
}
