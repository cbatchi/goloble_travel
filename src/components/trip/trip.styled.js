import styled from "styled-components";
import { tripPrimary, tripSecondary } from "../../assets";

const TripStyled = styled.div`
  min-height: 100vh;
  margin: 280px 74px 74px;

  .trip {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    height: auto;

    color: ${({ theme }) => theme.color.blackishGreen};

    font-family: ${({ theme }) => theme.font.family[0]};
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;

    &__content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
      width: 100%;
      cursor: pointer;
      margin-bottom: 80px;

      .item {
        box-shadow: 0px 4px 16px rgba(17, 34, 17, 0.05);
        border-radius: 16px;
        padding: 16px;
        display: flex;
        align-items: center;
        gap: 16px;
        flex: 1;

        transition: 0.5s;

        &:hover {
          transform: scale(1.1);
        }

        &-text {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-grow: 1;

          h3 {
            opacity: 0.7;
          }

          p {
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            text-transform: capitalize;
          }
        }
      }
    }

    &__destination {
      position: relative;
      display: flex;

      gap: 24px;
      height: 560px;
      margin-bottom: 70px;

      .item {
        width: 100%;
        height: auto;
        border-radius: 10px;
        position: relative;
        z-index: 1;
        display: flex;
        flex: 1;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-end;
        color: ${({ theme }) => theme.color.whiteNeutral};

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(18, 18, 18, 0.4) 100%
          );
          z-index: -1;
        }

        &:first-child {
          background: url(${tripPrimary}) top left no-repeat;
          background-size: cover;
        }
        &:last-child {
          background: url(${tripSecondary}) top left no-repeat;
          background-size: cover;
        }

        &__content {
          margin-bottom: 24px;
          text-align: center;
          font-family: ${({ theme }) => theme.font.family[1]};
          font-weight: 700;
          font-size: 40px;
          line-height: 51px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          li:first-of-type {
            text-transform: capitalize;
            margin-bottom: 8px;
          }
          li:nth-of-type(2) {
            font-family: ${({ theme }) => theme.font.family[0]};
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            margin-bottom: 16px;
          }
          li:last-of-type {
            display: flex;
            align-items: center;
            height: 48px;

            font-family: ${({ theme }) => theme.font.family[0]};
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;

            cursor: pointer;

            padding: 8px 16px 8px 16px;
            gap: 4px;
            border-radius: 4px;
            color: ${({ theme }) => theme.color.blackishGreen};

            text-transform: capitalize;
            background-color: ${({ theme }) => theme.color.mintGreen};

            #icon {
              width: 16px;
              height:16px;
            }
          }
        }
      }
    }
  }
`;

export default TripStyled;
;