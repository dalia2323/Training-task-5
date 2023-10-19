import React, { useEffect, useState } from 'react';
import Card from './card';

const Countries = () => {
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
    .then(response => response.json()
    )
    .then(data => {
        setCountries(data)

    })
    .catch((error) => {
        console.error("Error:", error);
    });
    },[]);
    console.log(countries)
    return (
        <div class="card-section">
        <div class="row" id="container">
        {countries.map(country=><Card country={country} />)}
        </div>
</div>
    );
}

export default Countries;
