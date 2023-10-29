import React, { useState } from 'react';
import movieData from './movieData.json';
import './Main.css'; 

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='main-container-wrapper' style={{paddingBottom:'30px'}}>
      <select className='select' onChange={(e) => handleCategorySelect(e.target.value)}>
        <option value="">Select a Category</option>
        <option value="Bollywood :">Bollywood</option>
        <option value="Hollywood :">Hollywood</option>
        <option value="Tollywood :">Tollywood</option>
      </select>
      {selectedCategory ? (
        <div className="card-container">
          {movieData[selectedCategory].map((movie, index) => (
            <a key={index} href={movie.link} target="_blank" rel="noopener noreferrer" className="card" style={{ width: '18rem' }}>
              <img src={movie.image} alt={movie.name} className="card-image" />
              <div className="card-body lead">
                <h5>{movie.name}</h5>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <div className="card-container">
          {Object.keys(movieData).map((category, index) => (
            <div key={index}>
              <h3>{category}</h3>
              <div className="movies-container">
                {movieData[category].map((movie, index) => (
                  <a key={index} href={movie.link} target="_blank" rel="noopener noreferrer" className="card">
                    <img src={movie.image} alt={movie.name} className="card-image" />
                    <div className="card-content lead">
                      <h4>{movie.name}</h4>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
