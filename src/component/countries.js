import React from 'react';
import Card from './card';

const Countries = ({countries}) => {
    return (
        <div class="card-section">
        <div class="row" id="container">
        {countries.map(country=><Card country={country} />)}
        </div>
</div>
    );
}

export default Countries;
