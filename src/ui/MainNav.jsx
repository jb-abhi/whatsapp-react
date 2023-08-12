import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Img = styled.img`
  height: 3.5rem;
  width: auto;
`;

const Icon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function MainNav({ setIsNavOpen, isNavOpen }) {
  return (
    <>
      <nav>
        <NavList>
          <Icon onClick={() => setIsNavOpen(!isNavOpen)}>
            <Img src="/WhatsApp.svg"></Img>
          </Icon>
        </NavList>
      </nav>
    </>
  );
}

export default MainNav;
