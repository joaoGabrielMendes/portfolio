import { Grid } from "@chakra-ui/react";

const Section = ({ children, height }) => {
  return (
    <Grid
      height={height || "100vh"}
      width={{ lg: "calc(100vw - 10%) " }}
      margin="auto"
      placeItems="center"
    >
      {children}
    </Grid>
  );
};

export default Section;
