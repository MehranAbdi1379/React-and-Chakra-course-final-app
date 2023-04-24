import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  type task = {
    id: number;
    title: string;
    description: string;
    img: string;
    author: string;
  };
  const [tasks, setTasks] = useState<task[]>();
  useEffect(() => {
    axios.get("http://localhost:3000/tasks").then((res) => setTasks(res.data));
  }, []);

  return (
    <SimpleGrid minChildWidth="300px" spacing="40px" p="40px">
      {tasks &&
        tasks.map((task) => (
          <Card
            key={task.id}
            borderTop="8px"
            borderColor="orange.400"
            bg="white"
          >
            <CardHeader>
              <HStack>
                <Avatar src={task.img}></Avatar>
                <Box>
                  <Heading size="sm">{task.title}</Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </HStack>
            </CardHeader>
            <CardBody>
              <Text color="gray">{task.description}</Text>
            </CardBody>
            <Divider borderColor="gray.300"></Divider>
            <CardFooter gap={7}>
              <Button variant="ghost" gap="35px">
                <HStack>
                  <ViewIcon></ViewIcon>
                  <Text>Watch</Text>
                </HStack>
              </Button>
              <Button variant="ghost">
                <HStack>
                  <EditIcon></EditIcon>
                  <Text>Comment</Text>
                </HStack>
              </Button>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
};

export default Dashboard;
