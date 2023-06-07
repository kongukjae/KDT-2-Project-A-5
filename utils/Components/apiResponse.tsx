import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchPage = () => {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/search/news");
      setSearchData(response.data);
    } catch (error) {
      console.error("Error fetching search data:", error);
    }
  };

  return (
    <div>
      <h1>Search Page</h1>
      <ul>
        {searchData.map((item: any, index) => (
          <li key={index}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
