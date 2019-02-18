// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const uri = 'mongodb://raphael_sattler:samsung7s@node-course-shard-00-00-dhztq.mongodb.net:27017,node-course-shard-00-01-dhztq.mongodb.net:27017,node-course-shard-00-02-dhztq.mongodb.net:27017/TodoApp?ssl=true&replicaSet=Node-course-shard-0&authSource=admin&retryWrites=true'

MongoClient.connect(uri, (err, client) => {
  if (err) {
     return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB sever');
  const db = client.db('TodoApp')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5c6b1c6b7cd8fd96edda4cc0')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5c6af33292bec10fa956c65b")
  }, {
    $set: {
      name: 'Raphael'
    },
    $inc: {
      age: 2
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // client.close();
});
