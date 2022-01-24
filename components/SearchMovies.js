import React, { useEffect, useState } from "react";
import Movies from "./Movies";

const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  rfvf;
  const fetchData = async () => {
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${
      process.env.NEXT_PUBLIC_MOVIE
    }&language=en-US&query=${"apple"}&page=1&include_adult=false'`;

    const res = await fetch(url);
    const resJson = await res.json();
    setMovies(resJson.results);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Movies results={movies} />
    </div>
  );
};

export default SearchMovies;
