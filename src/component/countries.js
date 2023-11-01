import React from 'react';
import Card from './card';
function Countries({ countries }) {
    return (
        <div className="card-section">
            <div className="row" id="container">
                {countries.map((country) => (
                    <Card key={country.name.common} country={country} />
                ))}
            </div>
        </div>
    );
}
export default Countries;