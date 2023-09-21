import {
  Box,
  Card,
  CardBody,
  CardHeader,
  VStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Section from "../../components/Section";
import React, { useState, useEffect } from "react";
import axios from "axios";
import StartScenes from "../../components/ThreeScene/StarsScene";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const username = "joaoGabrielMendes";
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar repositórios:", error);
      });
  }, [username]);

  return (
    <Box>
      <Header />
      <StartScenes />
      <VStack spacing="24px" wrap="wrap">
        {repos.map((repo) => (
          <Card key={repo.id}>
            <CardHeader>
              <Heading size="md">{repo.name}</Heading>
            </CardHeader>

            <CardBody>
              <Image
                src={`https://raw.githubusercontent.com/${username}/${repo.name}/main/assets/thumb.png`}
                maxW="360px"
                borderRadius="lg"
                objectFit="cover"
              />
            </CardBody>
          </Card>
        ))}
      </VStack>
      <Footer />
    </Box>
  );
};

export default Projects;
