// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const uri = 'mongodb://raphael_sattler:samsung7s@node-course-shard-00-00-dhztq.mongodb.net:27017,node-course-shard-00-01-dhztq.mongodb.net:27017,node-course-shard-00-02-dhztq.mongodb.net:27017/TodoApp?ssl=true&replicaSet=Node-course-shard-0&authSource=admin&retryWrites=true'

MongoClient.connect(uri, (err, client) => {
  if (err) {
     return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB sever');
  const db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   complement: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Raphael',
    age: 27,
    location: 'Brazil'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close();
});
