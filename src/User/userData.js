const Queue = require('./queue');

const users = new Queue();

users.enqueue(
  {
    userName: 'catsSuck225' 
  }
);

users.enqueue(
  {
    userName: 'animalzRock59' 
  }
);

users.enqueue(
  {
    userName: 'dogz4lyf' 
  }
);

users.enqueue(
  {
    userName: 'catz4lyf' 
  }
);

users.enqueue(
  {
    userName: 'catzAndDogz4Lyf' 
  }
);

module.exports = {users};