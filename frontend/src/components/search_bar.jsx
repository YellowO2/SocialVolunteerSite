import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  Box,
  InputLabel,
  FormControl,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [sortBy, setSortBy] = useState("recent");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ searchTerm, fromDate, toDate, sortBy });
  };

  return (
    <Box sx={{ p: 4, borderBottom: 1, borderColor: "divider" }}>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <TextField
            type="search"
            label="Search for events"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
          />
          <TextField
            type="date"
            label="From"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <TextField
            type="date"
            label="To"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
        </Box>

        <InputLabel>Sort By</InputLabel>
        <Select
          value={sortBy}
          label="Sort By"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <MenuItem value="recent">Recent</MenuItem>
          <MenuItem value="upvotes">Most Upvotes</MenuItem>
        </Select>
      </form>
    </Box>
  );
};

export default SearchForm;
