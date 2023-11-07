import React from 'react';
function Deatail() {
  return (
    <div class="col-md-6 col-sm-12 ">
    <div class="row mt-5">
        <div class="col-md-6 col-sm-12  pt-lg-5">
            <h2 class="mt-3 mb-4">Gibraltar</h2>
            <div class="fw-lighter fs-6 detail">
                <ul class="list-unstyled">
                    <li><b>Native Name</b>: Deutschland </li>
                    <li><b>Population</b>: 81,770,900</li>
                    <li><b>Region</b>: Europe</li>
                    <li><b>Sub Region</b>: Western Europe</li>
                    <li><b>Capital</b>: Berlin</li>
                </ul>
            </div>
        </div>
        <div class="col-md-6 col-sm-12 mt-20 fw-lighter">
            <ul class="list-unstyled">
                <li><b>Top Level Domain</b>: de</li>
                <li><b>Currencies</b>: Euro</li>
                <li><b>Languages</b>: Germany </li>
            </ul>
        </div>
    </div>
    <div class="row  pt-lg-4">
        <div class="col-md-12 col-sm-12 fw-lighter detail">
            <div class=" d-flex country-border ">
                <div class="d-inline-block"><b>Border Countries:</b></div>
                <span class=" d-inline-block w-width ms-2  shadow-sm">France </span>
                <span class=" d-inline-block w-width ms-2  shadow-sm">Belgium</span>
                <span class=" d-inline-block w-width ms-2  shadow-sm">Netherlands</span>
            </div>
        </div>
    </div>
</div>
 );
}

export default Deatail;