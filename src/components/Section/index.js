import { Grid } from "@chakra-ui/react";
import { Children } from "react";

const Section = ({ children }) => {
  return (
    <Grid
      height="100vh"
      width={{ lg: "calc(100vw - 10%) " }}
      margin="auto"
      placeItems="center"
    >
      {children}
    </Grid>
  );
};

export default Section;
