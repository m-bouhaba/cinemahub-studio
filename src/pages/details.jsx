import React from 'react'
import { useParams } from "react-router-dom";
import moviesData from "../data/data"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Details() {
  const [showVideo, setShowVideo] = useState(false);
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);

  const movie = moviesData.find(
    (m) => m.title.toLowerCase() === decodedTitle.toLowerCase()
  );

  return (
    <div className={`containerDetails ${showVideo ? "noOverlay" : ""}`} 
        style={{ backgroundImage: `url(${movie.imageDetails})` }}>

       <Link to="/" className="backButton">←</Link>

      <button className="playButton" onClick={() => setShowVideo(true)}>
         ▶ Play
      </button>

      {/* Détails du film */}
      <div className='details'>
        <h1>{movie.title}</h1>
        <p>Sortie: {movie.year} </p>
        <p>Durée: {movie.duration} </p>
        <p>Acteurs principaux: {movie.actors.join(", ")}</p>
        <p>{movie.description} </p>
      </div>

      {/* Vidéo YouTube */}
      {showVideo && (
        <div className="videoOverlay" onClick={() => setShowVideo(false)}>
          <div className="videoContainer" onClick={(e) => e.stopPropagation()}>
            <iframe 
              width="900" 
              height="500"
              src={`${movie.video}?rel=0&controls=0`} 
              title="Movie Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

    </div>
  );
}
