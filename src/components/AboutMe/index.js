import {
  Avatar,
  Grid,
  GridItem,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";

import Section from "../Section";
import { FaGamepad } from "react-icons/fa";
import { AiFillBook } from "react-icons/ai";
import { CgGym } from "react-icons/cg";
import { SiMyanimelist } from "react-icons/si";

const AboutMe = () => {
  return (
    <Section>
      <Grid templateColumns="1fr 1fr" placeItems="center" gap="1=8">
        <GridItem>
          <Grid gap={4} padding="40px">
            <Heading size="2xl" fontWeight="semibold">
              Sobre Mim
            </Heading>
            <Text>
              Olá, sou João Gabriel, estudante de Engenharia de Software na
              Faculdade Estácio de Sá. Estou sempre aprendendo e explorando
              novas linguagens de programação, frameworks de design e técnicas
              de usabilidade para me tornar um profissional mais completo.
            </Text>

            <Text>Eu tambem gosto de:</Text>
            <List fontSize="md">
              <ListItem>
                <ListIcon as={FaGamepad} />
                Jogar Video Game
              </ListItem>

              <ListItem>
                <ListIcon as={AiFillBook} />
                Ler livros
              </ListItem>
              <ListItem>
                <ListIcon as={CgGym} />
                Musculacao
              </ListItem>
              <ListItem>
                {" "}
                <ListIcon as={SiMyanimelist} />
                Ver Anime
              </ListItem>
            </List>
          </Grid>
        </GridItem>

        <GridItem>
          <Avatar
            size="3xl"
            name="Joao Gabriel Mendes"
            src="https://avatars.githubusercontent.com/u/121967325?s=400&u=20ab605bd46a5fb0c85ae15064c847ccd19a7472&v=4"
          />{" "}
        </GridItem>
      </Grid>
    </Section>
  );
};

export default AboutMe;
