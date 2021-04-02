module.exports = {
  siteMetadata: {
    title: "Grace Portfolio",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken:
          "a139ac29aea3d7a31a192bf8f3177a222bd394906779f4bbfee05ed6cb2aac10",
        spaceId: "rnpqidzxa4bk",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
