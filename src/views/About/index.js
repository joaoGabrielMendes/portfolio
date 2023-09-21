import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Section from "../../components/Section";
import AboutMe from "./AboutMe";

import { Link, Element } from "react-scroll";
import StarsScene from "../../components/ThreeScene/StarsScene";
import Skills from "./Skills";

const Sec = ({ title }) => {
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend turpis in arcu bibendum, eu ultrices quam lacinia. Phasellus fringilla massa nec justo hendrerit, sed venenatis dolor dictum. Vivamus ultrices urna vel metus congue facilisis. Integer quis venenatis turpis. Vivamus ut purus vel nisi tristique rhoncus. Sed sed semper purus. Integer vitae mi et sem volutpat luctus eu at nunc. Phasellus vitae nisl vitae est auctor vestibulum. Praesent euismod, sem vel venenatis malesuada, nisl turpis viverra tellus, in feugiat ex velit in quam. Integer ac bibendum massa, a finibus elit.";

  const content = [];
  for (let i = 0; i < 7; i++) {
    content.push(loremIpsum);
  }

  return (
    <Box padding="100px">
      <Heading>{title}</Heading>
      <Text>{content}</Text>
    </Box>
  );
};

const About = () => {
  return (
    <Box>
      <Header />
      <Grid position="fixed"></Grid>

      <Breadcrumb position="fixed" top="5" left="calc(10% - 40px)">
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
