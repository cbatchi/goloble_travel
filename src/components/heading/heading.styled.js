import styled from "styled-components";

const HeadingStyled = styled.div`
  margin-bottom: 40px;
  width: 100%;
  display: flex;
  height: 72px;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.blackishGreen};

  .heading__box {
    font-family: ${({ theme }) => theme.font.family[0]};
    font-style: normal;
    gap: 16px;
    display: flex;
    flex-direction: column;
    color: inherit;

    h2 {
      font-weight: 600;
      font-size: 32px;
      line-height: 39px;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
    }

    span {
      display: flex;
      align-items: center;
      height: 40px;
      padding: 8px 16px;
      text-align: center;
      border: 1px solid ${({ theme }) => theme.color.mintGreen};
      border-radius: 4px;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px) {
  }
`;

export default HeadingStyled;
