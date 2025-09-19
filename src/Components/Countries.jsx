import React, { use } from 'react';
import Country from './Country';
import './Countries.css';

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div>
      <h2>How many countries have: {countries.length}</h2>
      <h2>Country List</h2>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
