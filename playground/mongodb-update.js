// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5a5f6cb02a9b857e392d9343")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  //   });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID("5a5f652a2a9b857e392d9198")
    }, {
      $inc: {
        age: 1
      },
      $set: {
        name: 'Hera'
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

  // db.close();
});
