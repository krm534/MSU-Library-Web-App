import React, { useState, useEffect } from 'react';
import Guides from "./components/Guides";
import Pagination from "./components/Pagination";
import "./App.css";
const axios = require("axios");

function App() {
  const [allItems, addItem] = useState([{}]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [guidesPerPage, setGuidesPerPage] = useState(10);

  useEffect(() => {
    const fetchItems = async() => {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/");
      addItem(response.data);
      setLoading(false);
    }
    
    fetchItems();
  }, []);

  // Get current guides
  const indexOfLastGuide = currentPage * guidesPerPage;
  const indexOfFirstGuide = indexOfLastGuide - guidesPerPage;
  const currentGuides = allItems.slice(indexOfFirstGuide, indexOfLastGuide);

  // Paginate function 
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="container">
      <h1>Published Guides</h1>
      <Guides allItems={currentGuides} loading={loading}/>
      <Pagination guidesPerPage={guidesPerPage} totalGuides={allItems.length} paginate={paginate}/>
    </div>
  );
}

export default App;
