import { Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Linker = ({ to, alt, color = "white", colorScheme = "blue" }) => {
  return (
    <Link to={to}>
      <Button colorScheme={colorScheme} color={color} variant="outline">
        {alt}
      </Button>
    </Link>
  );
};

const Header = () => {
  return (
    <HStack
      position={{ base: "relative", lg: "absolute" }}
      zIndex={999}
      top="0"
      spacing={{ base: "5px", md: "20px" }}
      height={{ base: "10px", lg: "70px" }}
      padding="30px"
      justifyContent="center"
      right="1"
    >
      <Linker alt="inicio" to="/" />
      <Linker alt="Projetos" to="projects" />
      <Linker alt="Sobre min" to="about" />
    </HStack>
  );
};

export default Header;
