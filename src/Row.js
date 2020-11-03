import React, { useState, useEffect } from "react";
import Axios from "./axios";
import requests from "./request";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Row(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(props.fetchUrl);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  console.log(movies);
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row-posters">
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              className={`row-poster ${props.isLargeRow && "row-posterLarge"}`}
              src={`${base_url}${
                props.isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
