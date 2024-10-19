import React from "react";
import { useState } from "react";

const files = {
  children: [
    {
      name: "src",
      children: [
        {
          name: "app.jsx",
        },
        {
          name: "Main.jsx",
        },
        {
          name: "map.jsx",
        },
      ],
    },
    {
      name: "package.json",
      children: [
        {
          name: "app.jsx",
        },
        {
          name: "Main.jsx",
        },
        {
          name: "map.jsx",
        },
      ],
    },
    {
      name: "README.md",
    },
  ],
};

function Entry({ name, children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div style={{ marginLeft: "5rem" }}>
      <button
        style={{ border: "None", cursor: children ? "pointer" : "default" }}
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {name}
        {children && "+ "}
      </button>
      {isExpanded &&
        children &&
        children.map((file, fileIndex) => <Entry key={fileIndex} {...file} />)}
    </div>
  );
}

export default function Recursive() {
  return (
    <>
      {files.children.map((file, fileIndex) => (
        <Entry key={fileIndex} {...file} />
      ))}
    </>
  );
}
