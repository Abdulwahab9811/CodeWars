const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:

const handleSuccess = (Resolvedvalue)  => {
  console.log(Resolvedvalue);
};

const handleFailure = (ResolveRejected) => {
  console.log(ResolveRejected);
}

checkInventory(order)
.then(handleSuccess,handleFailure);
//adding a .then and a .catch tocheck each result of the promise
checkInventory(order) 
  .then(handleSuccess)
  .catch(handleFailure);

