import React from "react";
import DisplayCard from "../components/display_card";
import SearchBar from "../components/search_bar";
import { Container, Typography, Grid } from "@mui/material";

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
      <header className="bg-dark py-5 header-bg">
        <Container sx={{ py: 5 }}>
          <Typography
            variant="h1"
            align="center"
            color="white"
            fontWeight="bold"
            gutterBottom
          >
            Find Your People
          </Typography>
          <Typography
            variant="h4"
            align="center"
            color="white"
            fontWeight="normal"
          >
            And suck together
          </Typography>
        </Container>
      </header>

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
