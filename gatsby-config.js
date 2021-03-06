module.exports = {
  siteMetadata: {
    title: `ELON Mats Åke på Teg Umeå | Köp Vitvaror, kök, spis, tvättmaskin och torktumlare hos oss!`,
    description: `Välkommen till ELON MatsÅke på Teg i Umeå. Här får du stans bästa service! Hos oss hittar du kylskåp, dammsugare och andra typer av hushållsapparater.`,
    author: `Niklas Albinsson`,
    color: `#0B58A4`,
    siteUrl: `https://www.elonumea.se`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "oppettider",
        path: `${__dirname}/static/oppettider/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "personal",
        path: `${__dirname}/static/personal/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `kok`,
        path: `${__dirname}/static/images`,
      },
    },
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
        display: `minimal-ui`,
        icon: `./favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1000,
              backgroundColor: "#eee",
            },
          },
        ],
      },
    },
  ],
}
