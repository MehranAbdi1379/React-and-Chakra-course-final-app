import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Box, Grid, GridItem } from "@chakra-ui/react";

const RootLayout = () => {
  return (
    <>
      <Grid templateColumns="repeat(6 , 1fr)">
        <GridItem colSpan={{ base: 6, md: 2, xl: 1 }}>
          <Box
            position={{ base: "static", md: "fixed" }}
            width={{ base: "100%", md: "33.2%", xl: "16.6%" }}
          >
            <Sidebar></Sidebar>
          </Box>
        </GridItem>

        <GridItem colSpan={{ base: 6, md: 4, xl: 5 }} bg="gray.50">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </GridItem>
      </Grid>
    </>
  );
};

export default RootLayout;
