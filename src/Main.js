
/* Importing files */
import React from "react";
import Navbar from "./componants/navbar";
const ico = require("./images/icon.png");

/* Giving Navigation bar */
function Main() {
  return (
    <Navbar icon={ico}/>
  );
}

/* Exporting Module */
export default Main;
