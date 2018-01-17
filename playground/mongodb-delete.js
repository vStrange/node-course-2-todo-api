// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  //deleteMany
  // db.collection('Users').deleteMany({name: 'Violet'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete by id
  db.collection('Users').findOneAndDelete({_id: new ObjectID('5a5f5e17cae62e2126bfebf4')}).then((result) => {
    console.log(result);
  });

  // db.collection('Users').find({name: 'Sophia'}).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs, undefined, 2));
  // });

  // db.close();
});
