import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex justify="space-between" p="40px">
      <Heading fontFamily="sans-serif" as="h1">
        Dojo Tasks
      </Heading>
      <HStack>
        <Avatar src="/img/mario.png">
          <AvatarBadge boxSize="20px" bg="orange.500" borderWidth="0.15em">
            <Text fontSize="0.7em" paddingBottom="3px" paddingLeft="1.5px">
              3
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>mario@netninja.dev</Text>
        <Button colorScheme="orange">Logout</Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
