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
  background: {
    primary: "#14213D", // azul de fundo
    contrast: "#F3EBEB", // Branco para contraste
  },
};

const styles = {
  global: {
    body: {
      background:
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(20,33,61,1) 35%, rgba(35,80,108,1) 100%)",
      backgroundSize: "100% 100%", // Isso preencherá o plano de fundo
      backgroundRepeat: "no-repeat",
      minHeight: "100vh", // Define a altura mínima da página
    },
  },
};

const theme = extendTheme({ config, fonts, colors, styles });

export default theme;
