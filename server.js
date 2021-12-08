const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors'); 
const port = process.env.PORT||5000
const app = express()

// Register Middleware
app.use(bodyParser.json(), cors()) 

// Adding the Type Definition.
const typeDefinition = `
type Query  {
   greeting: String
}`
const  resolverObject = {
   Query : {
      greeting: () => 'Hello GraphQL  From TutorialsPoint !!'
   }
}

const {makeExecutableSchema} = require('graphql-tools');

const schema = makeExecutableSchema({typeDefs: typeDefinition, resolvers: resolverObject})

const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');

// Create routes for graphQL and graphiQL
app.use('/graphql', graphqlExpress({schema}))
app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}))
  
app.listen(port, () => console.log(`Server running at PORT: ${port}`))