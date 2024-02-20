import React from 'react';

export const City = ({ name, photo, population, area, district }) => (
    <div className="city">
        <h2>{name}</h2>
        <p>Počet obyvatel: {population}</p>
        <img src={photo} />
        <p>
            Rozloha: {area} km<sup>2</sup>
        </p>
        <p> Okres: {district}</p>
    </div>
);