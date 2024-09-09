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
