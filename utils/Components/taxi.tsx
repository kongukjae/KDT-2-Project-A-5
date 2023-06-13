import React, { useEffect, useState } from 'react';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch('../../src/models/stock.data.json') // JSON 파일의 경로
      .then((response) => response.json())
      .then((data) => setCompanies(data));

  }, []);

  return (
    <div className='main'>
    <ul>
      {companies.map((company) => (
        <li key={company[0]}>{company[0]} : {company[1]}</li>
      ))}
    </ul>
  </div>
  );
};

export default CompanyList;
