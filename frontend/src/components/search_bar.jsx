import React, { useState } from "react";

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
    <div className="p-4 border-bottom ">
      <form
        className="row row-cols-lg-auto align-items-center mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="col-12">
          <div className="input-group">
            <i className="input-group-text fa-solid fa-magnifying-glass"></i>
            <input
              type="search"
              className="form-control"
              placeholder="Search for events"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="input-group-text">From</span>
            <input
              type="date"
              className="form-control"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
            <span className="input-group-text">To</span>
            <input
              type="date"
              className="form-control"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />

            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </div>

        <div className="col-12">
          <select
            className="form-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="recent">Recent</option>
            <option value="upvotes">Most Upvotes</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
