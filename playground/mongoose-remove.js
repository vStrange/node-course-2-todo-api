const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*Todo.remove({}). Allows for removal of multiple records but it does not accept
and empty argument like find(), it needs to include an empty object*/

Todo.remove({}).then((result) => {
  console.log(result);
})

//Todo.removeOneAndRemove()
//Todo.findByIdAndRemove()
