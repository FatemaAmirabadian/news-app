import React, { useState } from "react";
import axios from "axios";

function Layout() {
  const [news, setNews] = useState([]);
  const [keyword, setKeyword] = useState("");
  const api =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4d2f2584f63f410b8931b998bd6b1b3d";

  const searchHandler = () => {
    axios.get(api).then((res) => setNews(res.data.articles));
  };
  return (
    <div>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <button onClick={searchHandler}>Search</button>
      {news.map((val) => (
        <p>{val.author}</p>
      ))}
    </div>
  );
}

export default Layout;
