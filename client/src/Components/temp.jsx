import React from "react";
import { useLocation } from "react-router-dom";

const Temp = () => {
  const loc = useLocation();
  return <div>Hello{loc.pathname}</div>;
};


export default Temp;