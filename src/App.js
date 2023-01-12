import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

const API_KEY = process.env.REACT_APP_NEWS_API;
console.log(API_KEY);

const App = () => {
  return (
    <div>
      <Navbar />
      <News API_KEY={API_KEY} />
    </div>
  );
};

export default App;
