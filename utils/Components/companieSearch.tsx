import React, { useState, useEffect } from "react";
import { ChangeEvent } from "react";

export default function companySearch() {
  const [input, setUserInput] = useState("");
  const [companies, setCompanies] = useState<[string, string][]>([]);
  useEffect(() => {
    fetch("../../src/models/stock.data.json")
      .then((response) => response.json())
      .then((data: [string, string][]) => {
        setCompanies(data);
      });
  }, []);

  const getValue = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="main">
      <input onInput={getValue} />
      <div className="stockData">{companies}</div>
    </div>
  );
}
