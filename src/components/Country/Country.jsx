import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  //   console.log(country.area.area);
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    //------1st way.....
    // if(visited){
    //     setVisited(false);
    // } else{
    //     setVisited(true);
    // }

    //------2nd way.....
    // setVisited(visited ? false : true);

    //------3st way.....
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    // <div
    //   className={`country ${visited ? "country-visited" : "country-not-visited"}`}
    // >

    <div className={`country ${visited && "country-visited"}`}>
      <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population} </p>
      <p>
        Area: {country.area.area} |{" "}
        {country.area.area > 300000 ? "Big country" : "Small Country"}
      </p>

      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>

      <button
        onClick={() => {
          handleVisitedFlag(country?.flags?.flags?.png);
        }}
      >
        Add Visited Flag
      </button>
    </div>
  );
};

export default Country;

/*
-----> 4 Ways to add css in jsx file react....

1. Inline CSS (Style Object)
2. 

*/
