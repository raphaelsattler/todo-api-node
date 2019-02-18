// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const uri = 'mongodb://raphael_sattler:samsung7s@node-course-shard-00-00-dhztq.mongodb.net:27017,node-course-shard-00-01-dhztq.mongodb.net:27017,node-course-shard-00-02-dhztq.mongodb.net:27017/TodoApp?ssl=true&replicaSet=Node-course-shard-0&authSource=admin&retryWrites=true'

MongoClient.connect(uri, (err, client) => {
  if (err) {
     return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB sever');
  const db = client.db('TodoApp')

  // db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) => {
  //   console.log(result);
  // })

  // db.collection('Todos').deleteOne({text: "Eat lunch"}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Raphael'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5c6b1fb17cd8fd96ede157d5')
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  // client.close();
});
