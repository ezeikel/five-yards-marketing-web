require("dotenv").config();

const typekitConfig = {
  typekit: {
    id: process.env.TYPEKIT_ID,
  },
};

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  host:
    process.env.CUSTOM_NODE_ENV === "production"
      ? "cdn.contentful.com"
      : "preview.contentful.com",
  accessToken:
    process.env.CUSTOM_NODE_ENV === "production"
      ? process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN
      : process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
};

// If you want to use the preview API please define
// CONTENTFUL_HOST and CONTENTFUL_PREVIEW_ACCESS_TOKEN in your
// environment config.
//
// CONTENTFUL_HOST should map to `preview.contentful.com`
// CONTENTFUL_PREVIEW_ACCESS_TOKEN should map to your
// Content Preview API token
//
// For more information around the Preview API check out the documentation at
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
//
// To change back to the normal CDA, remove the CONTENTFUL_HOST variable from your environment.
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [process.env.GA_MEASUREMENT_ID],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          // respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
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
    `gatsby-plugin-styled-components`,
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
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: typekitConfig,
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
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: false, // optional parameter to include script in development
        id: 1965853,
        sv: 6,
      },
    },
  ],
};
