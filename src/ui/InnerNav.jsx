import styled from "styled-components";
import { useState } from "react";
import { NavItems } from "../data/NavItems";
import ListItem from "./ListItem";

const Nav = styled.div`
  background-color: var(--whats-app-wa-white);
  width: 30rem;
  padding-top: 10rem;
  height: 100%;
  position: absolute;
  left: 60px;
  transform: ${(props) =>
    props.active ? "translateX(0)" : "translateX(-30rem)"};
  transform: ${(props) => (props.active ? "rotateX('180deg')" : "")};
  transition: all 0.3s ease-in-out;
  z-index: 50;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

function InnerNav({ isNavOpen }) {
  const [isOpen, setIsOpen] = useState(null);
  return (
    <Nav active={isNavOpen ? "active" : null}>
      <nav>
        <NavList>
          {NavItems.map((parentItem, index) => (
            <ListItem
              parentItem={parentItem}
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              index={index}
              key={index}
            />
          ))}
        </NavList>
      </nav>
    </Nav>
  );
}

export default InnerNav;
