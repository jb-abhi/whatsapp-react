import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ChildNav = styled.ul`
  margin-left: 3.6rem;
`;

const StyledNavLink = styled(NavLink)`
  font-family: "Poppins";
  justify-content: space-between;

  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
    margin-bottom: 5px;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const Arrow = styled.img`
  transform: ${(props) => (props.active ? "rotateZ(180deg)" : "")};
  transition: all 0.2s ease-in-out;
`;

const ListItem = ({ parentItem, isOpen, index, setIsOpen }) => {
  const open = isOpen === index;

  return (
    <li onClick={() => setIsOpen(open ? null : index)}>
      <StyledNavLink to={parentItem.link}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src={parentItem.icon} alt="" />
          <span className="four">{parentItem.name}</span>
        </div>
        {parentItem.childRoutes.length > 0 && (
          <Arrow src="/arrow.svg" active={open ? "active" : null} alt="" />
        )}
      </StyledNavLink>
      {parentItem.childRoutes.length > 0 && open && (
        <ChildNav>
          {parentItem.childRoutes.map((childItem, j) => (
            <li key={j}>
              <StyledNavLink to={childItem.link}>
                <span className="four">{childItem.name}</span>
              </StyledNavLink>
            </li>
          ))}
        </ChildNav>
      )}
    </li>
  );
};

export default ListItem;
