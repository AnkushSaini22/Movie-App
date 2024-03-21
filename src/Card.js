import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Card({ name, overview, id, path }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="card-container mt-3" style={{ width: '250px', margin: '0 auto' }}>
      <Link to={"/details/" + id} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div
          className="card"
          style={{
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            borderRadius: '10px',
            overflow: 'hidden',
            marginBottom: '20px', // Add margin between cards
            position: 'relative',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={"http://image.tmdb.org/t/p/w500/" + path} className="card-img-top" alt="..." style={{ width: '100%', height: 'auto', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
          <div className="card-body" style={{ padding: '1rem' }}>
            <h5 className="card-title">{name}</h5>
            <p className="card-text" style={{ display: isHovered ? 'block' : 'none' }}>{overview}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
