import React from 'react'

const Moviecard = ({ movie:{title,poster_path,original_language,vote_average,release_date} }) => {
  return (
    <div className="movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : `/no-movie.png`
          }
        alt="movie poster"
      onClick={() => {
        const query1 = encodeURIComponent(title);
        const url = `https://www.google.com/search?q=${query1}`;
        window.open(url, '_blank'); // Open in a new tab
      }}
      />
      <div className="mt">
        <h3>{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="start icon" />
            <p>{vote_average ? vote_average.toFixed(1) : "nan/"}</p>
          </div>
          <span>.</span>
          <p className='lang'>{original_language ? original_language : ""}</p>
          <span>.</span>
          <p className='year'>{release_date ? release_date.split("-")[0] : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default Moviecard;
