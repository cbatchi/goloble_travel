import styled from "styled-components";

const HeaderStyled = styled.header`
  position: relative;
  height: 600px;
  width: 100%;
  background: url(${({ imageSource }) => imageSource}) center center no-repeat;
  background-size: cover;
  border-radius: 24px;
  object-fit: cover;
  z-index: 1000;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, .6) 100%
    );
    border-radius: 0px 0px 24px 24px;
    transform: rotate(180deg);
    z-index: -1;
  }
`;

export default HeaderStyled;