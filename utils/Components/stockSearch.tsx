import React, { useState, useEffect } from "react";
import { ChangeEvent } from "react";
import "../../src/views/css/stockSearch.css"

export default function companySearch() {
  const [input, setInput] = useState("");
  const [companies, setCompanies] = useState<[string, string][]>([]);

  useEffect(() => {
    fetch("../../src/models/stock.data.json")
      .then((response) => response.json())
      .then((data: [string, string][]) => {
        setCompanies(data);
      });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };


  
  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.add("hovered");
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove("hovered");
  };

  const filteredCompanies = companies.filter(
    (company) =>
      company[0].includes(input) || company[1].includes(input)
  );

  return (
    <div className="main">
      <div className="mainInner">
        <input
          onChange={handleChange}
          placeholder="종목명 혹은 종목번호를 입력해주세요."
        />
        {input && filteredCompanies.length > 0 && (
          <div className="stockData">
            {filteredCompanies.map((company) => (
              <div
                key={company[1]}
                className="companyItem"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                {company[0]} : {company[1]}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
