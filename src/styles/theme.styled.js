import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    blackishGreen: "#112211",
    blackPrimary: "#000000",
    blackSecondary: "#1C1B1F",
    blackTertiary: "#79747E",

    mintGreen: "#8DD3BB",
    whiteNeutral: "#ffffff",

    yellow: "#FFC107",
  },

  font: {
    family: [
      '"Montserrat", sans-serif',
      '"TradeGothic LT Extended", sans-serif',
    ],
    weight: {
      normal: 400,
      meduim: 500,
      semibold: 600,
      bold: 700
    }
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
