import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';

export const WatchedList = () => {
  const [watchedMovies, setWatchedMovies] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("watchedMovies")) || [];
    setWatchedMovies(saved);
    document.title = "Watched Movies";
  }, []);

  return (
    <main className="container">
      <h5 className="turquoise py-2 border-bottom mb-3 position-relative">Watched Movies <span className="text-secondary fw-bold position-absolute end-0">Total: <i>{watchedMovies.length}</i></span></h5>
      
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3 py-2">
        {watchedMovies.length === 0 ? (
          <p className="text-light">No movies watched yet.</p>
        ) : (
          watchedMovies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </main>
  );
};
