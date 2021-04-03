import React, { useEffect } from "react";
import { Link, navigate } from "gatsby";
import styled from "styled-components";

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 0 25px 0 0;

  @media (min-width: 768px) {
    min-height: 75vh;
  }
`;

const NavElement = styled.nav`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  a {
    margin: 5px 0;

    &:first-of-type {
      margin: 5px 0 25px 0;
    }
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 20px 0 0 0;
`;

const Nav = ({ art, prevLink, nextLink }) => {
  const arrowNav = ({ keyCode }) => {
    if (keyCode === 37) {
      navigate(`/${prevLink}`);
    } else if (keyCode === 39) {
      navigate(`/${nextLink}`);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", arrowNav);

    return () => {
      document.removeEventListener("keydown", arrowNav);
    };
  }, []);

  return (
    <NavWrapper>
      <NavElement>
        <Link to="/work">Work</Link>
        <Link to="/about">About</Link>
        {/* <Link to="">Find Me</Link> */}
      </NavElement>
      {art ? (
        <Controls>
          <Link to={`/${prevLink}`}>Previous</Link>
          <Link to={`/${nextLink}`}>Next</Link>
        </Controls>
      ) : (
        <Controls />
      )}
    </NavWrapper>
  );
};

export default Nav;
