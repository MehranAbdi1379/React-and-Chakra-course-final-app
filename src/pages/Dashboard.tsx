import { Grid, GridItem } from "@chakra-ui/react";
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
    <Grid>
      {tasks &&
        tasks.map((task) => <GridItem minWidth="250px" bg="white"></GridItem>)}
    </Grid>
  );
};

export default Dashboard;
