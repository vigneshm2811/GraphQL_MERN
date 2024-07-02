import React from "react";
import MoviesCard from "../components/MoviesCard";

import { gql, useQuery } from "@apollo/client";

const listAllMovies = gql`
  query {
    listMovies {
      name
      genre
      year
    }
  }
`;

const Movies = () => {
  const { loading, error, data } = useQuery(listAllMovies);
  console.log(data);
  if (loading)
    return <p className="text-center">we are loading your movies...</p>;
  if (error)
    return (
      <p className="text-center">cannot fetch your Movies: {error.message}</p>
    );

  return (
    <div className="flex flex-wrap ">
      {data?.listMovies?.map((movie, i) => {
        return <MoviesCard movieData={movie} key={i} />;
      })}
    </div>
  );
};

export default Movies;
