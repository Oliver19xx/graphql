const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express();

// connect to mlab database
mongoose.connect('mongodb+srv://admin:C5kXmTx7YyST5VUj@cluster0.xxrca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log('connected to database');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening on port 4000');
});