import React from 'react'
import { Link } from 'react-router'
import moviesData from '../data/data'

export default function Home() {
    return (
        <>
            <section className='heroSection'>
                <h1>
                    <span className="red">D</span>écouvrez.
                    <span className="red">R</span>egardez.
                    <span className="red">V</span>ivez
                </h1>
                <p>Votre portail vers un cinéma sans limites.</p>

            </section>
            <section className='top10Section'>
                <h2> Top 10 du moment</h2>
                <div className="cardsContainer">
                {moviesData.slice(10, 20).map((movie, index) => (
                    <Link 
                        key={index} 
                        to={`/movie/${movie.title}`} 
                        className="movieCard"
                    >
                    <div key={index} className="movieCard">
                        <img src={movie.image} alt={movie.title} />
                        <h1>{movie.title}</h1>
                    </div>

                    </Link>
                ))}
                </div>
            </section >

            <section className='top10Section'>
                <h2>Action</h2>
                <div className="cardsContainer">
                {moviesData
                    .filter(movie => movie.category === "Action")
                    .map((movie, index) => (
                    <Link 
                        key={index} 
                        to={`/movie/${movie.title}`} 
                        className="movieCard"
                    >
                    <div key={index} className="movieCard">
                        <img src={movie.image} alt={movie.title} />
                        <h1>{movie.title}</h1>
                    </div>

                    </Link>
                ))}
                </div>
            </section >
            <section className='top10Section'>
                <h2>Comedy</h2>
                <div className="cardsContainer">
                {moviesData
                    .filter(movie => movie.category === "Comedy")
                    .map((movie, index) => (
                    <Link 
                        key={index} 
                        to={`/movie/${movie.title}`} 
                        className="movieCard"
                    >
                    <div key={index} className="movieCard">
                        <img src={movie.image} alt={movie.title} />
                        <h1>{movie.title}</h1>
                    </div>

                    </Link>
                ))}
                </div>
            </section >
            <section className='top10Section'>
                <h2>Drama</h2>
                <div className="cardsContainer">
                {moviesData
                    .filter(movie => movie.category === "Drama")
                    .map((movie, index) => (
                    <Link 
                        key={index} 
                        to={`/movie/${movie.title}`} 
                        className="movieCard"
                    >
                    <div key={index} className="movieCard">
                        <img src={movie.image} alt={movie.title} />
                        <h1>{movie.title}</h1>
                    </div>

                    </Link>
                ))}
                </div>
            </section >
            <section className='top10Section'>
                <h2>Family</h2>
                <div className="cardsContainer">
                {moviesData
                    .filter(movie => movie.category === "Family")
                    .map((movie, index) => (
                    <Link 
                        key={index} 
                        to={`/movie/${movie.title}`} 
                        className="movieCard"
                    >
                    <div key={index} className="movieCard">
                        <img src={movie.image} alt={movie.title} />
                        <h1>{movie.title}</h1>
                    </div>

                    </Link>
                ))}
                </div>
            </section >


        </>
    )
}
