const uri = 'mongodb://raphael_sattler:samsung7s@node-course-shard-00-00-dhztq.mongodb.net:27017,node-course-shard-00-01-dhztq.mongodb.net:27017,node-course-shard-00-02-dhztq.mongodb.net:27017/TodoApp?ssl=true&replicaSet=Node-course-shard-0&authSource=admin&retryWrites=true'

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || uri, { useNewUrlParser: true });

module.exports = {mongoose};
