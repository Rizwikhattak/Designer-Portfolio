import React from "react";
import { useEffect } from "react";

const Check = () => {
  useEffect(() => {
    const active = document.querySelector(".hello");
    console.log("This is hello :", active);
  });
  return <div className="hello"></div>;
};

export default Check;
