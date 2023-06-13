// import React, { useEffect, useState } from 'react';
// import "../../src/views/css/stockSearch.css"

// const CompanyList = () => {
//   const [companies, setCompanies] = useState([]);

//   useEffect(() => {
//     fetch('../../src/models/stock.data.json') // JSON 파일의 경로
//       .then((response) => response.json())
//       .then((data) => setCompanies(data));

//   }, []);

//   return (
//     <div className='main'>
//       <input type='text' placeholder='종목코드 혹은 종목명을 입력해주세요'></input>
//       <input type='submit' value={'검색'}></input>
//     <ul className='stockList'>
//       {companies.map((company) => (
//         <li key={company[0]}>{company[0]} : {company[1]}</li>
//       ))}
//     </ul>
//   </div>
//   );
// };

// * export default CompanyList; //1번 코드 끝

// import React, { ChangeEvent, useEffect, useState } from 'react';
// import "../../src/views/css/stockSearch.css"

// const CompanyList = () => {
//   const [companies, setCompanies] = useState([]);
//   const [searchText, setSearchText] = useState('');
//   const [filteredCompanies, setFilteredCompanies] = useState([]);

//   useEffect(() => {
//     fetch('../../src/models/stock.data.json')
//       .then((response) => response.json())
//       .then((data) => {
//         setCompanies(data);
//         setFilteredCompanies(data);
//       });
//   }, []);

//   const handleSearch = (event:ChangeEvent<HTMLInputElement>) => {
//     const inputText = event.target.value;
//     setSearchText(inputText);

//     const filtered = companies.filter(
//       (company:[string,string]) =>
//         company[0].includes(inputText) || company[1].includes(inputText)
//     );
//     setFilteredCompanies(filtered);
//   };

//   return (
//     <div className='main'>
//       <input
//         type='text'
//         placeholder='종목코드 혹은 종목명을 입력해주세요'
//         value={searchText}
//         onChange={handleSearch}
//       />
//       <input type='submit' value={'검색'}></input>
//       <ul className='filteredStockList'>
//         {filteredCompanies}
//       </ul>
//       <ul className='stockList'>
//         {filteredCompanies.map((company) => (
//           <li key={company[0]}>
//             {company[0]} : {company[1]}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

//! export default CompanyList; // 2번코드 끝
// import React, { useEffect, useState, ChangeEvent } from 'react';
// import "../../src/views/css/stockSearch.css"

// const CompanyList = () => {
//   const [companies, setCompanies] = useState<[string, string][]>([]);
//   const [searchText, setSearchText] = useState('');
//   const [filteredCompanies, setFilteredCompanies] = useState<[string, string][]>([]);

//   useEffect(() => {
//     fetch('../../src/models/stock.data.json')
//       .then((response) => response.json())
//       .then((data: [string, string][]) => {
//         setCompanies(data);
//         setFilteredCompanies(data);
//       });
//   }, []);

//   const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
//     const inputText = event.target.value;
//     setSearchText(inputText);

//     const filtered = companies.filter(
//       (company) =>
//         company[0].toString().includes(inputText) ||
//         company[1].toString().includes(inputText)
//     );
//     setFilteredCompanies(filtered);
//   };

//   return (
//     <div className='main'>
//       <input
//         type='text'
//         placeholder='종목코드 혹은 종목명을 입력해주세요'
//         value={searchText}
//         onChange={handleSearch}
//       />
//       <input type='submit' value={'검색'}></input>
//       <ul className='stockList' style={{ display: filteredCompanies.length?  'block':'none'  }}>
//         {filteredCompanies.map((company) => (
//           <li key={company[0]}>
//             {company[0]} : {company[1]}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

//? export default CompanyList; //3번 코드 끝

import React, { useEffect, useState } from "react"; 
import "../../src/views/css/stockSearch.css";

const CompanyList = () => {
  const [companies, setCompanies] = useState<[string, string][]>([]);
  const [searchText, setSearchText] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState<
    [string, string][]
  >([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    fetch("../../src/models/stock.data.json")
      .then((response) => response.json())
      .then((data: [string, string][]) => {
        setCompanies(data);
      });
  }, []);

  const handleSearch = () => {
    const filtered = companies.filter(
      (company) =>
        company[0].toString().includes(searchText) ||
        company[1].toString().includes(searchText)
    );
    setFilteredCompanies(filtered);
    setIsFiltered(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleButtonClick = () => {
    handleSearch();
  };

  return (
    <div className="main">
      <div className="mainInner">
        <input
          type="text"
          placeholder="종목코드 혹은 종목명을 입력해주세요"
          value={searchText}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>검색</button>
        <ul
          className="stockList"
          style={{ display: isFiltered ? "block" : "none" }}
        >
          {filteredCompanies.map((company) => (
            <li key={company[0]}>
              {company[0]} : {company[1]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyList; // 4번 코드 끝
