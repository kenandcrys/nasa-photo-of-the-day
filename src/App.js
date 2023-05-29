import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./components/Title";
import "./App.css";
import Image from "./components/Image";
import Explanation from "./components/Explanation";
function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.error(err);
      });

    const cleanup = () => {
      console.log('Performing cleanup...');
    };
    cleanup();
  }, []);

  return (
    <div className="App">
      <Title title={data.title} />
      <Image hdurl={data.hdurl} />
      <Explanation explanation={data.explanation} />
    </div>
  );
}

export default App;