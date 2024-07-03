require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const movieResolvers = require('./resolvers/resolvers');
const movieSchema = require('./schema/schema');
const cors = require('cors');

// Load environment variables
const PORT = process.env.PORT || 4000;
const DB_CONNECTION = process.env.DB_CONNECTION;

// Connect to MongoDB
mongoose.connect(DB_CONNECTION)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => console.log(err));

// Enable CORS
app.use(cors());

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
    schema: movieSchema,
    rootValue: movieResolvers,
    graphiql: true
}));

// Test endpoint
app.get('/hi', (req, res) => {
    res.send("Hello from the Monster!!!🌼");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} ❤︎ ❤︎ ❤︎`);
});
