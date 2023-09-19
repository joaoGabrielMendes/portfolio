import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const fonts = {
  body: "poppins, sans-serif",
  heading: "poppins, sans-serif",
};

const colors = {
  text: {
    primary: "#202020", // preto escuro
    contrast: "#F3EBEB", // branco contraste
  },
  accent: {
    50: "#66C4FE", // azulzinho bara botoes
    100: "#1B71A7",
  },
  bg: {
    primary: "#14213D", // azul de fundo
    contrast: "#F3EBEB", // Branco para contraste
  },
};

const styles = {
  global: {
    body: {
      backgroundColor: "black",
      overflow: "hidden",
    },
  },
};

const theme = extendTheme({ config, fonts, colors, styles });

export default theme;
