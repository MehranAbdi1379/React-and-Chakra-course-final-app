import { SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { Form } from "react-router-dom";

const Create = () => {
  const toast = useToast();

  const onSubmit = () => {
    toast({
      title: "Task created",
      colorScheme: "orange",
      description: "The new task is created.",
      duration: 3000,
      isClosable: true,
      icon: <SunIcon></SunIcon>,
      position: "top",
      variant: "top-accent",
    });
  };
  return (
    <Box height="86vh">
      <Form onSubmit={onSubmit}>
        <FormControl isRequired p={5}>
          <FormLabel>Task name:</FormLabel>
          <Input type="text" width={400}></Input>
        </FormControl>
        <FormControl p={5}>
          <FormLabel>Task description:</FormLabel>
          <Textarea
            placeholder="Enter a detailed description for the task..."
            width={400}
          ></Textarea>
        </FormControl>
        <FormControl p={5}>
          <Checkbox colorScheme="orange">Make this a priority task</Checkbox>
        </FormControl>
        <FormControl p={5}>
          <Button type="submit">Submit</Button>
        </FormControl>
      </Form>
    </Box>
  );
};

export default Create;
