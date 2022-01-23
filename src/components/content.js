import React, { useState, useEffect } from "react";
import Guides from "../helpers/Guides";
import Pagination from "../helpers/Pagination";
import "../styles/content.css";
import { API_ENDPOINT } from "../util/constants";

function Content() {
  const [currentPage, setCurrentPage] = useState(1);
  const [returnedItems, setReturnedItems] = useState([]);
  const [currentGuides, setCurrentGuides] = useState([]);
  const guidesPerPage = 10;

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(API_ENDPOINT);
      const responseJson = await response.json();
      return responseJson;
    };

    fetchItems().then((response) => {
      setReturnedItems(response);
    });
  }, []);

  useEffect(() => {
    if (Object.keys(returnedItems).length > 0) {
      let lastIndex = currentPage * guidesPerPage;
      let firstIndex = lastIndex - guidesPerPage;
      let slicedItems = returnedItems.slice(firstIndex, lastIndex);
      setCurrentGuides(slicedItems);
    }
  }, [returnedItems, currentPage]);

  // Paginate function
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="content-container">
      <div className="heading">
        <h1>MSU Published Guides</h1>
      </div>
      <Pagination
        guidesPerPage={guidesPerPage}
        totalGuides={Object.keys(returnedItems).length}
        paginate={paginate}
      />
      <Guides allItems={currentGuides} />
    </div>
  );
}

export default Content;
