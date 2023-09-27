import {
  Box,
  Card,
  CardBody,
  Skeleton,
  Heading,
  Center,
  Wrap,
  WrapItem,
  Avatar,
} from "@chakra-ui/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import React, { useState, useEffect } from "react";
import axios from "axios";
import StartScenes from "../../components/ThreeScene/StarsScene";
import { Link } from "react-router-dom";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = "joaoGabrielMendes";
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        setRepos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar repositórios:", error);
        setLoading(false);
      });
  }, [username]);

  let count = [1, 2, 3, 4];

  return (
    <Box>
      <StartScenes />

      <Header />

      <Section>
        <Box>
          <Heading>Projetos</Heading>
        </Box>
        <Wrap spacing="36px" justify="center" width="100%">
          {loading
            ? count.map(() => (
                <WrapItem>
                  <Card bg="transparent">
                    <CardBody
                      paddingX="0"
                      paddingTop="0"
                      aspectRatio="4/3"
                      width="300px"
                      borderTopRadius="md"
                    >
                      <Center
                        borderTopRadius="md"
                        height="100%"
                        backgroundColor="gray.200" // Cor de fundo do esqueleto
                      >
                        <Skeleton
                          height="100%"
                          width="100%"
                          fadeDuration={4}
                          bg="blue.500"
                        />
                      </Center>
                    </CardBody>
                  </Card>
                </WrapItem>
              ))
            : // Mapeie os repositórios e exiba-os quando os dados estiverem prontos
              repos.map((repo) => (
                <Link to={repo.html_url} key={repo.id}>
                  <WrapItem>
                    <Card bg="transparent">
                      <CardBody
                        paddingX="0"
                        paddingTop="0"
                        aspectRatio="4/3"
                        width="300px"
                        borderTopRadius="md"
                      >
                        <Center
                          borderTopRadius="md"
                          src={`https://raw.githubusercontent.com/${username}/${repo.name}/main/assets/thumb.png`}
                          height="100%"
                          bgImage={`url(https://raw.githubusercontent.com/${username}/${repo.name}/main/assets/thumb.png)`}
                          bgSize="cover"
                          bgPosition="left"
                        />

                        <Wrap justify="start" padding="6px">
                          <Avatar
                            src="https://avatars.githubusercontent.com/u/121967325?s=400&u=20ab605bd46a5fb0c85ae15064c847ccd19a7472&v=4"
                            size="xs"
                          />
                          {repo.name}
                        </Wrap>
                      </CardBody>
                    </Card>
                  </WrapItem>
                </Link>
              ))}
        </Wrap>
      </Section>

      <Footer />
    </Box>
  );
};

export default Projects;
