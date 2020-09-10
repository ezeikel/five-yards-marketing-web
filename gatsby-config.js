module.exports = {
  siteMetadata: {
    title: `Five Yards - Untraditionally traditional.`,
    ogTitle: `Revolutionising the process of getting traditional sewn.`,
    description: `Find the finest fabrics and most talented tailors all over the world and manage the process of getting traditional garments sewn all through one app.`,
    author: `@fiveyardsapp`,
    url: `https://get.fiveyardsapp.app`,
    secureUrl: `https://get.fiveyards.app`,
    image: `https://api.fiveyards.app/images/og-image.jpg`,
    twitterImage: `https://api.fiveyards.app/images/twitter-card.jpg`,
    locale: `en_GB`,
    name: `Five Yards`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-149484751-1",
        head: true,
        // TODO: find out if this is required due to any privacy laws
        // anonymize: true,
        // respectDNT: true,
        pageTransitionDelay: 0,
      },
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "bch1lxu",
        },
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://app.us20.list-manage.com/subscribe/post?u=ac95b1249faaeb735efa4fbcc&amp;id=74779c67e7",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `pfc34uqwamht`,
        accessToken: `9fKc2nhqZfY4V7CMgpUKYsCKycPIvGGX03QAUtiJkfE`,
      },
    },
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn:
          "https://30e084ac65b444529916384ff996ec2b@o358156.ingest.sentry.io/5361983",
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/.*\.svg/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -300,
      },
    },
  ],
};
