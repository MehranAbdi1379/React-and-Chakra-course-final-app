import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Box, Grid, GridItem } from "@chakra-ui/react";

const RootLayout = () => {
  return (
    <>
      <Grid templateColumns="repeat(6 , 1fr)">
        <GridItem colSpan={{ base: 6, md: 2, xl: 1 }} height="100vh">
          <Sidebar></Sidebar>
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
