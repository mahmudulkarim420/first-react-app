import React, { use, useState } from 'react';
import Country from './Country';
import './Countries.css';

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] =  useState([]);
  const handleVisitedCountries = (country) => {
    console.log('visited countries', country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  }
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div>
      <h2>How many countries have: {countries.length}</h2>
      <h2>Country List</h2>
      <h3>Visited Countries: {visitedCountries.length}</h3>
      <ol>
        {
          visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
        }
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>
        ))}
      </div> 
    </div>
  );
};

export default Countries;
