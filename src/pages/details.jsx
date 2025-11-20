import React from 'react'
import { useParams } from "react-router-dom";
import moviesData from "../data/data"

export default function Details() {
  const { title } = useParams();
console.log('======' + title)
  // Décoder "The%20Mask" → "The Mask"
  const decodedTitle = decodeURIComponent(title);
console.log('decoder' + decodedTitle)

  // Trouver le film en comparant le titre
  const movie = moviesData.find(
    (m) => m.title.toLowerCase() === decodedTitle.toLowerCase()
  );

  return (
    <div className='containerDetails' style={{ backgroundImage: `url(${movie.imageDetails})` }}>
      <div className='details'>
        <h1>{movie.title}</h1>
        <p>Sortie: {movie.year} </p>
        <p>Durée: {movie.duration} </p>
        <p>Acteur principaux: {movie.actors}</p>
        <p>{movie.description} </p>


      </div>
   
    </div>
  );
}
