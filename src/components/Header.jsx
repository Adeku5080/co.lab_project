import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Header = () => {
  return (
    <Container>
      <LogoContainer>MO</LogoContainer>

      <NavItems>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
      </NavItems>

      <a href="https://docs.google.com/document/d/1z2dbkKyWQk9q_JjzYLlN1t5u7rxj6EWGgIcvH9b0DhA/">
        <Button text="RESUME" link="" />
      </a>
    </Container>
  );
};

const Container = styled.div`
  height: 70px;
  width: 95vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #191919;
`;
const LogoContainer = styled.div``;
const NavItems = styled.ul`
  display: flex;
  width: 20%;
  justify-content: space-between;

  li {
    list-style: none;
    &:hover {
      cursor: pointer;
    }

    &::after {
      content: "";
      display: block;
      width: 0%;
      height: 2px;
      background: #ff78f0;
      transition: width 0.3s ease;
    }
    &:hover::after {
      width: 100%;
    }
  }
`;

export default Header;
