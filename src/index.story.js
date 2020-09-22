import React from "react";
import App from "./App";

export default { title: "ProductPage" };
const clickEvent = () => {
  console.log("clicked from product page");
};

const containerObj = {
  pageName: "Product",
  getConsoleLog: clickEvent,
};

export const defaultRender = () => <App containerData={containerObj} />;
