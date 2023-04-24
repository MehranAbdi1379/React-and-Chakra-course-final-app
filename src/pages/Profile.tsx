import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  StarIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import {
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

const Profile = () => {
  return (
    <Tabs
      paddingLeft="40px"
      variant="enclosed"
      colorScheme="orange"
      paddingRight="40px"
      paddingTop="25px"
    >
      <TabList>
        <Tab _selected={{ bg: "orange" }}>Account Info</Tab>
        <Tab _selected={{ bg: "orange" }}>Task History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <HStack p={1} paddingBottom={3}>
            <EmailIcon color="orange.500"></EmailIcon>
            <Text>Email: mario@netninja.dev</Text>
          </HStack>
          <HStack p={1} paddingBottom={3}>
            <ChatIcon color="orange.500"></ChatIcon>
            <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit.</Text>
          </HStack>
          <HStack p={1} paddingBottom={3}>
            <StarIcon color="orange.500"></StarIcon>
            <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit.</Text>
          </HStack>
        </TabPanel>
        <TabPanel>
          <HStack p={1} paddingBottom={3}>
            <CheckCircleIcon color="green"></CheckCircleIcon>
            <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit.</Text>
          </HStack>
          <HStack p={1} paddingBottom={3}>
            <CheckCircleIcon color="green"></CheckCircleIcon>
            <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit.</Text>
          </HStack>
          <HStack p={1} paddingBottom={3}>
            <WarningIcon color="red"></WarningIcon>
            <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit.</Text>
          </HStack>
          <HStack p={1} paddingBottom={3}>
            <CheckCircleIcon color="green"></CheckCircleIcon>
            <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit.</Text>
          </HStack>
          <HStack p={1} paddingBottom={3}>
            <WarningIcon color="red"></WarningIcon>
            <Text>Lorem ipsum dolor sit amet consectetur adipiscing elit.</Text>
          </HStack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Profile;
