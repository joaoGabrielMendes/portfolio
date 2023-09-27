import { Box, Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

import { Model } from "../ThreeScene/React_logo";
import { Canvas } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Link } from "react-router-dom";
import TypingAnimation from "../Animations/TypingAnimation";

const windowWidth = window.innerWidth;
const luminanceThreshold = windowWidth < 1000 ? 3 : 1;
const position = windowWidth < 1000 ? [4, -2, -10] : [0, 0, 2];

const Main = () => {
  return (
    <Grid
      bg="black"
      width={{ lg: "calc(100vw - 10%) " }}
      margin="auto"
      height={{ base: "auto", lg: "100%" }}
      templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      placeItems="center"
    >
      <GridItem>
        <Grid padding="40px" gap={{ base: "7", lg: "4" }} justifyItems="start">
          <Heading
            color="text.contrast"
            size="md"
            fontWeight="light"
            paddingLeft={{ base: "0", lg: "10px" }}
            zIndex=""
          >
            Desenvolvedor
          </Heading>

          <Box>
            <Heading size="3xl" fontWeight="bold">
              <TypingAnimation text="Joao Gabriel Mendes" />
            </Heading>
          </Box>

          <Text color="text.contrast" fontSize="sm" padding="4px">
            Olá, sou João Gabriel, estudante de Engenharia de software da
            Faculdade Estácio de Sá. Minha paixão está em unir design e
            programação web criar experiências digitais excepcionais.
          </Text>

          <Link to="https://github.com/joaoGabrielMendes">
            <Button colorScheme="white" variant="outline" size="lg">
              Get Started
            </Button>
          </Link>
        </Grid>
      </GridItem>

      <GridItem
        overflow="hidden"
        display={{ base: "block", lg: "block" }}
        position={{ base: "absolute", lg: "initial" }}
        top="20"
        zIndex="1"
      >
        <Canvas
          style={{
            width: "100vw",
            height: "100vh",
          }}
          camera={{ position: [0, 0, 20] }}
        >
          <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            <Model position={position} />
          </Float>
          <EffectComposer>
            <Bloom
              mipmapBlur={150}
              luminanceThreshold={luminanceThreshold}
              radius={0.8}
            />
          </EffectComposer>
          <Stars saturation={0} count={500} speed={0.9} />
        </Canvas>
      </GridItem>
    </Grid>
  );
};

export default Main;
