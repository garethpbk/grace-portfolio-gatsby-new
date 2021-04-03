import React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import { Container, Left, Right } from "../components/base";
import Nav from "../components/Nav";

const AboutWrapper = styled.main`
  padding: 0 50px;

  p {
    line-height: 1.5;
  }

  p,
  li {
    font-size: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 0 0 10px 0;
  }
`;

const About = (data) => {
  const aboutText =
    data.data.contentfulGraceText.aboutText.childMarkdownRemark.html;

  const createMarkup = () => {
    return { __html: aboutText };
  };

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
          <AboutWrapper dangerouslySetInnerHTML={createMarkup()} />
        </Right>
      </Container>
    </Layout>
  );
};

export default About;

export const ABOUT_QUERY = graphql`
  query {
    contentfulGraceText {
      aboutText {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
