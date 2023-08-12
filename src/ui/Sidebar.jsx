import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import InnerNav from "./InnerNav";

const StyledSidebar = styled.aside`
  background-color: var(--theme-colors-theme-secondary);
  padding: 1rem 1rem;
  border-right: 1px solid var(--color-grey-100);
  position: relative;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  z-index: 100;
`;

function Sidebar({ setIsNavOpen, isNavOpen }) {
  return (
    <>
      <StyledSidebar>
        <Logo />
        <MainNav setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
      </StyledSidebar>
      <InnerNav isNavOpen={isNavOpen} />
    </>
  );
}

export default Sidebar;
