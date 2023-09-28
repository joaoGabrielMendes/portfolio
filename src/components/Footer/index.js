import { HStack, Icon } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = ({ iconSize = 7 }) => {
  return (
    <HStack
      spacing="20px"
      height="70px"
      position="fixed"
      zIndex={999}
      padding="20px"
      justifyContent="flex-end"
      bottom="0"
      right="1"
    >
      <IconContext.Provider value={{ color: "white" }}>
        <Link to="https://github.com/joaoGabrielMendes">
          <Icon as={BsGithub} boxSize={iconSize} />
        </Link>
        <Link to="https://www.linkedin.com/in/jo%C3%A3o-gabriel-mendes/+">
          <Icon as={BsLinkedin} boxSize={iconSize} />
        </Link>
        <Link to="https://www.instagram.com/">
          <Icon as={BsInstagram} boxSize={iconSize} />
        </Link>
        <Link to="mailto:contato@jonathammises@proton.me">
          <Icon as={MdEmail} boxSize={iconSize} />
        </Link>
      </IconContext.Provider>
    </HStack>
  );
};

export default Footer;
