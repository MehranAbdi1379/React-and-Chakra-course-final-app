import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { Box, HStack, Heading, List, ListItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box p="20px" bg="orange.300" height={{ base: "500px", md: "100vh" }}>
      <List spacing={3} paddingTop={2}>
        <ListItem>
          <Link to="/">
            <HStack color="white">
              <CalendarIcon></CalendarIcon>
              <Heading size="s">DashBoard</Heading>
            </HStack>
          </Link>
        </ListItem>

        <ListItem>
          <Link to="create">
            <HStack color="white">
              <EditIcon></EditIcon>
              <Heading size="s">New Task</Heading>
            </HStack>
          </Link>
        </ListItem>
        <ListItem>
          <Link to="profile">
            <HStack color="white">
              <AtSignIcon></AtSignIcon>
              <Heading size="s">Profile</Heading>
            </HStack>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
