const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const movieResolvers = require('./resolvers/resolvers');
const movieSchema = require('./schema/schema');
const cors = require('cors')

mongoose.connect('mongodb+srv://vigneshmohan6383:Potato@cluster0.qtvo68g.mongodb.net/')
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => console.log(err));

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema: movieSchema,
    rootValue: movieResolvers,
    graphiql: true
}));

app.get('/hi', (req, res) => {
    res.send("Hello from the Monster!!!🌼");
});

app.listen(4000, () => {
    console.log("Server on port 4000 ❤︎ ❤︎ ❤︎ ");
});
