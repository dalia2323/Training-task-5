import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../constant/ItemTypes";

function Card({ country }) {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD, // Use the defined item type
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div
      ref={drag}
      style={{ opacity }}
      className="col-lg-4 col-md-4 col-sm-6 f-sm-2 mb-3"
    >
      <div className="card rounded-3 mb-3 me-3 ms-3 shadow-sm" id="card">
        <img src={country.flags.png} className="card-img-top" alt="..." />
        <div className="card-body mb-3">
          <h5 className="card-">{country.name.common}</h5>
          <p className="card-text">
            <span className="country-detail">Population</span>:{" "}
            <span className="country-detail-2">{country.population}</span> <br />
            <span className="country-detail">Region</span>:{" "}
            <span className="country-detail-2">{country.region}</span> <br />
            <span className="country-detail">Capital</span>:{" "}
            <span className="country-detail-2">{country.capital}</span>
          </p>
          <button
            className="favorite-button"
            // onClick={() =>
            //   toggleFavorite(country.name.common, country.flags.png)
            // }
          >
            <i className="fa-solid fa-star favorite-icon "></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
