import React, { useState } from "react";

const tempData = [
  {
    id: "sign-up-form",
    name: "Sign-Up Form",
    category: "HTML",
  },
  {
    id: "item-cart",
    name: "Item Cart",
    category: "HTML",
  },
];

BASE_URL = "https://www.algoexpert.io/api/fe/questions";

export default function FEtest() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) throw Error("reponse failed");
      const data = await response.json();

      return data;
    } catch (err) {
      console.log(err);
    }
  };
  return <div></div>;
}
