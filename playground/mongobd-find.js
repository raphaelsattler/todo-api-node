// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const uri = 'mongodb://raphael_sattler:samsung7s@node-course-shard-00-00-dhztq.mongodb.net:27017,node-course-shard-00-01-dhztq.mongodb.net:27017,node-course-shard-00-02-dhztq.mongodb.net:27017/TodoApp?ssl=true&replicaSet=Node-course-shard-0&authSource=admin&retryWrites=true'

MongoClient.connect(uri, (err, client) => {
  if (err) {
     return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB sever');
  const db = client.db('TodoApp')

  // db.collection('Todos').find({
  //   _id: new ObjectID('5c6b12767cd8fd96edc85ca4')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: {$ne: 'Raphael'}}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  });

  // client.close();
});
