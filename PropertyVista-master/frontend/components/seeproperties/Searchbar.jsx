

import React, { useState } from "react";
import "./Searchbar.css";

const SearchBar = ({ onSearch }) => {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(category, searchTerm);
  };

  return (
    <div className="searchbar-container">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="searchbar-select"
      >
        <option value="">Select Category</option>
        <option value="apartment">Apartment</option>
        <option value="villa">Villa</option>
        <option value="studio">Studio</option>
        <option value="flat">Flat</option>
        <option value="bungalow">Bungalow</option>
        <option value="penthouse">Penthouse</option>
        <option value="townhouse">Townhouse</option>
        <option value="duplex">Duplex</option>
        <option value="farmhouse">Farmhouse</option>
        <option value="loft">Loft</option>
      </select>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search properties"
        className="searchbar-input"
      />
      <button onClick={handleSearch} className="searchbar-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
