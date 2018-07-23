import React, { Component } from 'react';



const AllCoinsSearch = (props) => {

  const handleSearchChange = (e) => {
    e.preventDefault();
    props.onSearchTextChange(e.target.value);
  }

    return (
        <input className="all-coins-search"
          type="text"
          placeholder="Search a coin by name..."
          onChange={handleSearchChange}>
        </input>
    );
}

export default AllCoinsSearch;