import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useModal } from "../context/ModalContext";

const listAllMovies = gql`
  query {
    listMovies {
      name
      genre
      year
    }
  }
`;

const addNewMovie = gql`
  mutation AddNewMovie(
    $name: String!
    $genre: String!
    $year: String!
    $image: Upload!
  ) {
    addMovie(name: $name, genre: $genre, year: $year, image: $image) {
      name
      genre
      year
    }
  }
`;

const AddMovie = () => {
  const [movieName, setMovieName] = useState("");
  const [movieGenre, setMovieGenre] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const { closeModal } = useModal();

  const [addMovieMutation, { loading, error }] = useMutation(addNewMovie, {
    refetchQueries: [{ query: listAllMovies }],
  });

  const submitMovie = async (e) => {
    e.preventDefault();

    try {
      await addMovieMutation({
        variables: {
          name: movieName,
          genre: movieGenre,
          year: movieYear,
          image: selectedFile,
        },
      });
      closeModal();
    } catch (error) {
      console.error("Failed to add movie:", error);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  if (loading) return <p>Movie is uploading...</p>;
  if (error) return <p>Failed to upload movie: {error.message}</p>;

  return (
    <>
      <form onSubmit={submitMovie} className="w-full">
        <div className="mb-5">
          <label
            htmlFor="Name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Movie Name
          </label>
          <input
            type="text"
            id="Name"
            onChange={(e) => setMovieName(e.target.value)}
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="Genre"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Movie Genre
          </label>
          <input
            type="text"
            id="Genre"
            onChange={(e) => setMovieGenre(e.target.value)}
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="Year"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Movie Year
          </label>
          <input
            type="text"
            id="Year"
            onChange={(e) => setMovieYear(e.target.value)}
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="Image"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Movie Image
          </label>
          <input
            type="file"
            id="Image"
            onChange={handleFileChange}
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-black text-lg bg-[#facc15] font-semibold w-full py-2 rounded-sm">
          Add Movie
        </button>
      </form>
    </>
  );
};

export default AddMovie;
