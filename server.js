var express = require('express');
var {graphqlHTTP} = require('express-graphql');
var {buildSchema} = require('graphql');

var port = process.env.PORT||3000;

var schema = buildSchema(`
   type Query {
      hello: String
      hi : String
   }
`);

var root = { hello : () => 'Hello World !', hi : () => 'Abnit Chauhan'};

var app = express();

app.use('/graphql', graphqlHTTP({
   schema: schema,
   rootValue: root,
   graphiql: true,
}))

app.listen(3000, () => console.log(`Server Running at http://localhost:${port}`))