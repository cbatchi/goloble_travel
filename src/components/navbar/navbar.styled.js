import styled from "styled-components";

const NavbarStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${({ theme }) => theme.font.family[0]} !important;
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  color: ${({ theme }) => theme.color.whiteNeutral};
  padding: 24px 32px;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
    font-size: 1rem;
    line-height: 1.06rem;
    text-transform: capitalize;

    li a {
      display: flex;
      align-items: center;
      gap: 4px;

      #icon {
        font-size: 24px;
        display: inline-block;
      }
    }

    &:first-child {
      order: 2;
    }
    &:nth-child(2) {
      order: 1;
    }
    &:last-child {
      order: 3;
      position: relative;
      color: ${({ theme }) => theme.color.whiteNeutral};

      li {
        padding: 15px 24px;
        border-radius: 8px;
        background-color: transparent;
        transition: 1s background ease-out;
        cursor: pointer;

        &:last-of-type,
        &:hover {
          color: ${({ theme }) => theme.color.blackishGreen};
          background-color: ${({ theme }) => theme.color.whiteNeutral};
        }
      }
    }

    @media screen and (max-width: 960px) {
    }
  }
`;

export default NavbarStyled;
