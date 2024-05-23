import React from "react";
import DisplayCard from "../components/display_card";
import SearchBar from "../components/search_bar";
import { Container, Grid, Divider } from "@mui/material";
import Hero from "../components/hero";

// Mock data
const mockPostDataList = [
  {
    id: 1,
    title: "Cleanup",
    description: "Join us for a cleanup event!",
    image: "https://via.placeholder.com/150",
    upvotes: 0,
  },
  {
    id: 2,
    title: "Clot Restoration",
    description: "Help!!!",
    image: "https://via.placeholder.com/150",
    upvotes: 10,
  },
  {
    id: 69,
    title: "Clot Restoration",
    description: "Help us restoring the local clot!",
    image: "https://via.placeholder.com/150",
    upvotes: 69,
  },
  {
    id: "gaygay",
    title: " Restoration",
    description: "Help us restoring the local !",
    image: "https://via.placeholder.com/150",
    upvotes: 11,
  },
  {
    id: "rithwik",
    title: " Restoration",
    description: "Help us restoring !",
    image: "https://via.placeholder.com/150",
    upvotes: 0,
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <Divider />

      <SearchBar />

      <Container sx={{ py: 4 }}>
        <Grid container spacing={2}>
          {mockPostDataList.map((postData) => (
            <Grid key={postData.id} item xs={6} md={4}>
              <DisplayCard postData={postData} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
