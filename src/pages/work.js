import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

import Layout from "../components/layout";
import { Container, Left, Right } from "../components/base";
import Nav from "../components/Nav";

const Gallery = styled.main`
  display: grid;

  grid-template-columns: 1fr;
  grid-gap: 15px;

  padding: 0 50px;

  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const drawArt = (arts) =>
  arts.map((art) => {
    const {
      node: {
        name,
        bigImage: { gatsbyImageData },
      },
    } = art;

    const image = getImage(gatsbyImageData);

    const slug = name.toLowerCase().replace(/ /g, "-");

    console.log({ slug });

    return (
      <Link to={`/${slug}`} key={slug}>
        <GatsbyImage image={image} />
      </Link>
    );
  });

const Work = (data) => {
  const allArt = data.data.allContentfulGraceArt.edges;

  return (
    <Layout>
      <Container>
        <Left>
          <Link to="/">
            <h1>Grace Mae Huddleston</h1>
          </Link>
          <Nav />
        </Left>
        <Right>
          <Gallery>{drawArt(allArt)}</Gallery>
        </Right>
      </Container>
    </Layout>
  );
};

export default Work;

export const ALL_ART = graphql`
  query {
    allContentfulGraceArt {
      edges {
        node {
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
          }
          bigImage {
            title
            file {
              url
            }
            fluid {
              ...GatsbyContentfulFluid
            }
            gatsbyImageData
          }
        }
      }
    }
  }
`;
