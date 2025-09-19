import React from 'react';

const Country = ({country}) => {
console.log(country)
  return (
    <div>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>Region: {country.region.region}</p>
    </div>
  );
};

export default Country;