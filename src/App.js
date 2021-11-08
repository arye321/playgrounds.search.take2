import Dropdown from "./Dropdown";
import { useState, useEffect } from "react";
import JsonData from "./data/data.json";

import { Printsites } from "./Printsites";
import "./styles.css";

export default function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Dropdown />
      <Printsites data={landingPageData.Printsites} />
    </div>
  );
}
