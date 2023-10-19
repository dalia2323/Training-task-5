import React from "react";
function Card({country}){
    return (
    <div class="col-lg-4 col-md-4 col-sm-6 f-sm-2 mb-3">
    <div class="card rounded-3 mb-3 me-3 ms-3 shadow-sm" id="card">
      <img src={country.flags.png}  class="card-img-top " alt="..."  />
      <div class="card-body mb-3">
        <h5 class="card-">{country.name.common}</h5>
        <p class="card-text">
          <span class="country-detail">Population</span>: <span class="country-detail-2">{country.population}</span> <br />
          <span class="country-detail">Region</span>: <span class="country-detail-2">{country.region}</span> <br />
          <span class="country-detail">Capital</span>:<span class="country-detail-2"> {country.capital}</span>
        </p>
        <button class="favorite-button" onclick="toggleFavorite(this,'{country.name.common}','{country.flags.png}')">
          <i class="fa-solid fa-star favorite-icon "></i>
        </button>
      </div>
    </div>
  </div>)
}
export default Card;