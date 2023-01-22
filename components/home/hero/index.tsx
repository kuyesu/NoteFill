import React from "react";
import Navbar from "./navbar";
import Description from "./description";

export default function index() {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <Description />
    </div>
  );
}
