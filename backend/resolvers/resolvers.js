// resolvers/resolvers.js
const Movie = require('../model/model');

const resolvers = {
    listMovies: async () => {
        try {
            return await Movie.find();
        } catch (err) {
            throw new Error('Error fetching movies');
        }
    },
    addMovie: async ({ name, genre, year }) => {
        try {
            const newMovie = new Movie({ name, genre, year });
            return await newMovie.save();
        } catch (err) {
            throw new Error('Error adding movie');
        }
    }
};

module.exports = resolvers;
