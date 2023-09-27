import { Grid, Heading, HStack, Icon } from "@chakra-ui/react";
import Section from "../Section";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoHtml5,
  BiLogoCss3,
} from "react-icons/bi";
import { FaNode, FaJava, FaGit, FaReact, FaLinux } from "react-icons/fa";
import {
  SiStyledcomponents,
  SiSpringboot,
  SiAdobephotoshop,
  SiAdobexd,
  SiAdobeaftereffects,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IconContext } from "react-icons";

const CustomIcon = ({ as, size = "100px" }) => {
  return <Icon as={as} boxSize={size} />;
};

const Skills = () => {
  return (
    <Section>
      <Grid justifyItems="center" gap="2em">
        <Heading size="2xl" fontWeight="semibold">
          Skills
        </Heading>
        <HStack spacing="5em" wrap="wrap">
          <IconContext.Provider value={{ color: "white", size: "2em" }}>
            <CustomIcon as={BiLogoHtml5} />
            <CustomIcon as={BiLogoCss3} />
            <CustomIcon as={BiLogoJavascript} />
            <CustomIcon as={FaNode} />
            <CustomIcon as={BiLogoTypescript} />
            <CustomIcon as={FaReact} />
            <CustomIcon as={TbBrandNextjs} />
            <CustomIcon as={SiStyledcomponents} />
            <CustomIcon as={FaJava} />
            <CustomIcon as={SiSpringboot} />
            <CustomIcon as={FaGit} />
            <CustomIcon as={FaLinux} />
            <CustomIcon as={SiAdobephotoshop} />
            <CustomIcon as={SiAdobexd} />
            <CustomIcon as={SiAdobeaftereffects} />
          </IconContext.Provider>
        </HStack>
      </Grid>
    </Section>
  );
};

export default Skills;
