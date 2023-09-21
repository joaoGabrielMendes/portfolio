import { Box } from "@chakra-ui/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";

const Home = () => {
  return (
    <Box height="100vh" overflow="hidden">
      <Header />
      <Footer />
      <Main />
    </Box>
  );
};

export default Home;
