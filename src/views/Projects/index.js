import {
  Box,
  Card,
  CardBody,
  CardHeader,
  VStack,
  Heading,
  Image,
  HStack,
  Grid,
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
import { BsWindowSidebar } from "react-icons/bs";

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
      <StartScenes />

      <Header />

      <Section>
        <Box>
          <Heading>Works</Heading>
        </Box>
        <Wrap spacing="36px" justify="center" width="100%">
          {repos.map((repo) => (
            <WrapItem key={repo.id}>
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
          ))}
        </Wrap>
      </Section>

      <Footer />
    </Box>
  );
};

export default Projects;
