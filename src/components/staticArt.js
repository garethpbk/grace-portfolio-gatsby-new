import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const StaticArt = ({
  data: {
    bigImage,
    materials,
    name,
    size,
    year,
    bigImage: { gatsbyImageData },
  },
}) => (
  <div>
    <a href={bigImage.file.url} target="_blank" rel="noopener noreferrer">
      <GatsbyImage image={getImage(gatsbyImageData)} />
    </a>
    <p>{name}</p>
    <p>{size}</p>
    <p>{materials.materials}</p>
    <p>{year}</p>
  </div>
);

export default StaticArt;
