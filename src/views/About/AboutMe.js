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
//import { Link, Element } from "react-scroll";
import Section from "../../components/Section";
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
              Sobre Min
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
            src="https://i.ibb.co/SR737vy/template-0.png"
          />{" "}
        </GridItem>
      </Grid>
    </Section>
  );
};

export default AboutMe;
