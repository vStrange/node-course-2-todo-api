// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to inser to do', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // });

  db.collection('users').insertOne({
    name: 'Violet',
    age: 30,
    location: 'Austin'
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert user', err)
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
