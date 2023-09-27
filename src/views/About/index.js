import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Grid,
} from "@chakra-ui/react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Skills from "../../components/Skills";
import AboutMe from "../../components/AboutMe";
import StarsScene from "../../components/ThreeScene/StarsScene";

import { Link, Element } from "react-scroll";

const About = () => {
  return (
    <Box>
      <Header />

      <Breadcrumb
        position="fixed"
        top="5"
        left="calc(10% - 40px)"
        display="none"
      >
        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link to="introducao" smooth={true} duration={500}>
              Introducao
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink>
            <Link to="skills" smooth={true} duration={500}>
              Habilidades
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <StarsScene />

      <Element name="introducao">
        <AboutMe />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Footer />
    </Box>
  );
};

export default About;
