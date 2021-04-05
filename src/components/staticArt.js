import React from "react";
import { getImage } from "gatsby-plugin-image";

import { ArtImg, ArtWrapper } from "./art";

const StaticArt = ({
  data: {
    materials,
    name,
    size,
    year,
    image: {
      file: { url },
      gatsbyImageData,
    },
  },
}) => (
  <ArtWrapper>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <ArtImg image={getImage(gatsbyImageData)} />
    </a>
    <p>{name}</p>
    <p>{size}</p>
    <p>{materials.materials}</p>
    <p>{year}</p>
  </ArtWrapper>
);

export default StaticArt;
