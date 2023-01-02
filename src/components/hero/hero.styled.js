import styled from "styled-components";

const HeroStyled = styled.div`
  color: ${({ theme }) => theme.color.whiteNeutral};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: ${({ theme }) => theme.font.family[1]};
  position: relative;
  width: 100%;

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 54px 0 150px 0;
    gap: 4px;
    width: 100%;
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: 45px;
    line-height: 57px;
    position: relative;

    &__item {
      display: block;
      position: relative;

      &:nth-of-type(2) {
        font-size: 80px;
        line-height: 100px;
        text-transform: uppercase;
        margin-bottom: 16px;
      }
      &:nth-of-type(3) {
        font-weight: ${({ theme }) => theme.font.weight.semibold};
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
  .searchbar {
    min-height: 200px;
    background-color: ${({ theme }) => theme.color.whiteNeutral};
    border-radius: 16px;
    padding: 16px 32px 32px;
    box-shadow: 0px 4px 16px rgba(141, 211, 187, 0.15);
    width: 100%;

    color: ${({ theme }) => theme.color.blackishGreen};
    margin: 0 74px;

    &__top {
      display: flex;
      gap: 32px;
      padding: 12px 0;
      font-size: 16px;
      font-weight: ${({ theme }) => theme.font.weight.semibold};
      text-transform: capitalize;
      font-family: ${({ theme }) => theme.font.family[0]};
      position: relative;
      width: 229px;

      a {
        display: flex;
        align-items: center;
        gap: 8px;
        position: relative;

        &::before {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 0;

          width: 0%;
          height: 4px;
          background-color: ${({ theme }) => theme.color.mintGreen};

          margin-top: 20px;
          transition: 0.5s ease;
          border-radius: 10px;
        }

        &:hover::before {
          right: 0;
          width: 100%;
        }

        #icon {
          width: 24px;
          height: 24px;
        }
      }

      span.line {
        transform-origin: center;
        position: absolute;
        top: 12px;
        left: 40%;
        bottom: 12px;
        width: 2px;
        transform: translateX(-50%);
        background-color: ${({ theme }) => theme.color.mintGreen};
        border-radius: 10px;
      }
    }

    &__field {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      margin-top: 20px;
      flex-wrap: wrap;
      flex: 1 1 0;
      width: 100%;
      margin-bottom: 32px;

      &-input {
        border-radius: 4px;
        border: 1px solid ${({ theme }) => theme.color.blackTertiary};
        gap: 12px;
        padding: 8px 0px 8px 16px;
        font-size: 1rem;
        position: relative;
        flex: 0 0 1;

        input,
        select {
          background: transparent;
          outline: none;
          appearance: none;
          border: none;
          width: 260px;
          padding: 12px;
          position: relative;

          &:first-of-type {
            color: #000000;
            font-size: 16px;
            line-height: 20px;
          }
        }

        input:first-of-type {
        }

        #icon {
          display: inline-block;
          vertical-align: middle;
          padding: 0 12px;
          position: relative;
        }

        label {
          visibility: hidden;
          position: absolute;
          top: 15px;
          left: 24px;
          transition: 0.5s;
          cursor: text;
        }

        input:focus ~ label {
          top: -9px;
          font-size: 0.8rem;
          left: 16px;
          background-color: ${({ theme }) => theme.color.whiteNeutral};
          text-transform: capitalize;
          visibility: visible;
        }
      }

      &-submit {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        gap: 24px;
        color: ${({ theme }) => theme.color.blackishGreen};

        span {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 4px;
          height: 48px;
          background-color: ${({ theme }) => theme.color.mintGreen};
          padding: 16px;
          border-radius: 4px;
          font-family: ${({ theme }) => theme.font.family[0]};
          font-style: normal;
          font-weight: ${({ theme }) => theme.font.weight.bold};
          font-size: 14px;
          line-height: 17px;
          text-transform: uppercase;
          cursor: pointer;

          #icon {
            width: 16px;
            height: 16px;
          }

          &:first-of-type {
            background-color: transparent;
            text-transform: capitalize;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
          }
        }
      }
    }
  }

  /* media queries */

  @media screen and (max-width: 768px) {
    
  }
`;

export default HeroStyled;
