import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../constant/ItemTypes';
import '../App.css';
const Favrioute = () => {
    const [favoriteCards, setFavoriteCards] = useState([]);
    const [isDraggingOver, setIsDraggingOver] = useState(false);
    const [, drop] = useDrop({
      accept: ItemTypes.CARD,
      hover: () => {
        setIsDraggingOver(true);
      },
      drop: (item) => {
        setIsDraggingOver(false);
        const { name, imgSrc } = item;
        if (!favoriteCards.some((c) => c.name === name)) {
          const newFavorite = { name, imgSrc };
          setFavoriteCards([...favoriteCards, newFavorite]);
        }
      },
    });
    const favoriteSectionClass = `w-25 favourite-section shadow-sm ${
        isDraggingOver ? 'draggable' : ''
      }`;
    const removeFavorite = (index) => {
      const updatedFavorites = [...favoriteCards];
      updatedFavorites.splice(index, 1);
      setFavoriteCards(updatedFavorites);
    };
    return (
        <div className={favoriteSectionClass} id="favorite-section" ref={drop}>
        <p className="m-2 fs-5 ps-2 fw-bolder fs-5">Favorites</p>
            <div className="h-80 m-3 d-block favourite-container">
                {favoriteCards.map((c, index) => (
                    <div className="d-flex mb-2 justify-content-between" key={index}>
                        <img src={c.imgSrc} className="favourite-item-img" alt="favorite" />
                        <p className="favourite-item-name">{c.name}</p>
                        <button
                            className="border-0 cancel-button"
                        onClick={() => removeFavorite(index)}
                        >
                            <i
                                className="fa-solid fa-circle-xmark"
                                style={{ color: '#bcbec2' }}
                            ></i>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Favrioute;
