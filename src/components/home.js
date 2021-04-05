import React from "react";
import Base from "./base";
import StaticArt from "./staticArt";

const Home = ({ art, links }) => (
  <Base
    links={links}
    index={0}
    art={true}
    render={() => <StaticArt data={art[0]} />}
  />
);

export default Home;
