import React, { useState, useEffect } from "react";
import { ChangeEvent } from "react";
import "../../src/views/css/stockSearch.css"


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
  };

  const resultCompanie = () => {
    const filteredCompanies = companies.filter((company) => {
      return company[0].includes(input) || company[1].includes(input);
    });

    return filteredCompanies.map((company) => (
      <div
        key={company[1]}
        className="companyItem"
        onMouseOver={() => handleMouseOver(company[1])}
        onMouseOut={() => handleMouseOut(company[1])}
      >
        {company[0]} : {company[1]}
      </div>
    ));
  };

  const handleMouseOver = (companyId: string) => {
    const element = document.getElementById(companyId);
    if (element) {
      element.classList.add("hovered");
    }
  };

  const handleMouseOut = (companyId: string) => {
    const element = document.getElementById(companyId);
    if (element) {
      element.classList.remove("hovered");
    }
  };

  return (
    <div className="main">
      <div className="mainInner">
        <input
          onInput={getValue}
          placeholder="종목명 혹은 종목번호를 입력해주세요."
        />
        {input && resultCompanie().length > 0 && (
          <div className="stockData">{resultCompanie()}</div>
        )}
      </div>
    </div>
  );
}
