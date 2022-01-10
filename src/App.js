import React, { useState, useEffect } from "react";
import './App.css';
import { Search } from "./components/searchUser";

const App = () => {
  const [search, setSearch] = useState();
  const [searchResult, setSearchResult] = useState();
  const [arr, setArr] = useState([]);
  
  const submitHandler = (e) => {
    e.preventDefault();
    setSearchResult(search);
  }
  
  useEffect(() => {
    fetchReq();
  }, [search])

  const fetchReq = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    setArr(data);
  }

  return (
    <div className="App">
      <h1>InstaJarg</h1>
      <h2>{search}</h2>
      {searchResult && <h3>Cannot find {search}. Are you sure you are spelling their name correctly?</h3>}
      <Search setter={setSearch} handler={submitHandler} />
      {arr.map((item, i) => {
        return(
          <div>
            <p key={i}>{item.author}</p>
            <img className="imgFeed" src={item.download_url} alt="Random Img"/>
          </div>
        )
      })}
    </div>
  );
}

export default App;
