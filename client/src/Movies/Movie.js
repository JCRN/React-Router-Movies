import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import MovieCard from "./MovieCard"

const Movie = props => {
  const [movie, setMovie] = useState()
  const id = props.match.params.id
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        setMovie(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [id])

  const saveMovie = () => {
    const addToSavedList = props.addToSavedList
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>
  }

  const { title, director, metascore, stars } = movie
  return (
    <div className='save-wrapper'>
      <MovieCard movie={movie} />
      <div className='save-button' onClick={saveMovie}>
        Save
      </div>
    </div>
  )
}

export default Movie
