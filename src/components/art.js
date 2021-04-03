import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import Layout from "./layout";
import Base from "./base";

export const ArtWrapper = styled.div`
  width: 75%;
`;

export const ArtImg = styled(GatsbyImage)`
  width: 100%;
  max-width: 900px;
`;

const Art = (props) => {
  const {
    bigImage,
    bigImage: { gatsbyImageData },
    materials,
    name,
    size,
    year,
  } = props.pageContext.edge.node;
  const { index, links } = props.pageContext;

  const image = getImage(gatsbyImageData);

  return (
    <Layout>
      <Base
        links={links}
        index={index}
        art={true}
        render={() => (
          <ArtWrapper>
            <a
              href={bigImage.file.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArtImg image={image} />
            </a>
            <p>{name}</p>
            <p>{size}</p>
            <ReactMarkdown>{materials.materials}</ReactMarkdown>
            <p>{year}</p>
          </ArtWrapper>
        )}
      />
    </Layout>
  );
};

export default Art;
