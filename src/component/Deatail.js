import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages/countryDetail/countryDeatail.css';
function Deatail({country}) {
    console.log(country)
    const [neighbors, setNeighbors] = useState([]);

    useEffect(() => {
        if(country.borders){
            fetch(`https://restcountries.com/v3.1/alpha?codes=${country.borders.join(',')}`)
            .then(res => res.json())
            .then((result) => {
                setNeighbors(result);
            })
        }
    }, [country.borders]);
    let currencies, languages;
    if(!country.currencies){
       currencies = '';
    }

    else{
        let currencyArray = [];
        Object.values(country.currencies).forEach(value => {
            currencyArray.push(value.name);
        });
        currencies = currencyArray.join(', ');
    }

    if(!country.languages){
        languages = '';
    }

    else{
        let languagesArray = [];
        Object.values(country.languages).forEach(value => {
            languagesArray.push(value);
        });
        languages = languagesArray.join(', ');
    }
return (
    <div class="col-md-6 col-sm-12 ">
    <div class="row mt-5">
        <div class="col-md-6 col-sm-12  pt-lg-5">
            <h2 class="mt-3 mb-4">{country.name.common}</h2>
            <div class="fw-lighter fs-6 detail">
                <ul class="list-unstyled">
                    <li><b>Native Name</b>: {country.name.common} </li>
                    <li><b>Population</b>: {country.population.toLocaleString('en-US')}</li>
                    <li><b>Region</b>: {country.region}</li>
                    <li><b>Sub Region</b>: {country.subregion}</li>
                    <li><b>Capital</b>: {country.capital}</li>
                </ul>
            </div>
        </div>
        <div class="col-md-6 col-sm-12 mt-20 fw-lighter">
            <ul class="list-unstyled">
                <li><b>Top Level Domain</b>: {country.tld}</li>
                <li><b>Currencies</b>: {currencies}</li>
                <li><b>Languages</b>: {languages} </li>
            </ul>
        </div>
    </div>
    <div className='single-flag_neighbors'>
                    <p className="single-flag_category">Border Countries: </p>
                    <div className='neighbors-container'>
                        {(neighbors.length === 0 || neighbors.message) ?
                        <p className='no-neighbors-text'>No neighboring countries</p> :
                        neighbors.map((el) => {
                            return (
                                <Link to={`/countries/${el.cca3}`} key={`${country.cca3}-neighbor-${el.cca3}`}>
                                    <div className={`neighbors-link`}>
                                        {`${el.name.common}`}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
    
</div>
);
}

export default Deatail;