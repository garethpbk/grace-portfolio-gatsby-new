import React from "react";
import { graphql } from "gatsby";
import "typeface-raleway";
import "typeface-lato";

import Layout from "../components/layout";
import Home from "../components/home";

const IndexPage = (data) => {
  const art =
    data.data.allContentfulGraceArtReference.edges[0].node.artReference;

  const links = art.map((uno) => uno.name.toLowerCase().replace(/ /g, "-"));

  return (
    <Layout>
      <Home art={art} links={links} />
    </Layout>
  );
};

export default IndexPage;

export const ALL_ART = graphql`
  query {
    allContentfulGraceArtReference {
      edges {
        node {
          artReference {
            id
            name
            year
            size
            materials {
              materials
            }
            image {
              title
              file {
                url
              }
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
