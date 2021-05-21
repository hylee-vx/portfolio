require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Portfolio",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
      },
    }
  ],
};
