
import React from 'react';
import './Episode.css';

export const Episode = ({ num, title, guest }) => (
    <div className="episode">
      <div className="episode-number">{num}</div>
      <div className="episode-details">
        <h2>{title}</h2>
        <p>{guest}</p>
      </div>
    </div>
  );


export default Episode;
