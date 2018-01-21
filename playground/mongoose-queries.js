const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a64c1a4a60147e8462d528411';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// };

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

//query Users collection
//handle user found, user not found and error cases

var id = '5a64ca78ca2d1648d7eb8f06';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User', user)
}).catch((e) => console.log(e));
