import React, { useState, useEffect } from "react";
import Guides from "./components/Guides";
import Pagination from "./components/Pagination";
import "./App.css";
import { API_ENDPOINT } from "./constants";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const guidesPerPage = 10;
  let lastGuideIndex = 0;
  let firstGuideIndex = 0;
  let currentGuides = [];
  let returnedItems = [];

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(API_ENDPOINT);
      const responseJson = await response.json();
      return responseJson;
    };

    fetchItems().then((response) => {
      returnedItems.push(response);
    });
  }, []);

  if (returnedItems.size > 0) {
    // Get current guides
    console.log("IF STATEMENT");
    console.log(returnedItems);
    lastGuideIndex = currentPage * guidesPerPage;
    firstGuideIndex = lastGuideIndex - guidesPerPage;
    currentGuides = returnedItems.slice(firstGuideIndex, lastGuideIndex);
  }

  // Paginate function
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <h1>Published Guides</h1>
      <Guides allItems={currentGuides} />
      <Pagination
        guidesPerPage={guidesPerPage}
        totalGuides={returnedItems.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
