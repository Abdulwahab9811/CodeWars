const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation (e.g., fetching data from a server)
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        resolve(randomNumber); // Operation succeeded
      } else {
        reject(new Error('Operation failed')); // Operation failed
      }
    }, 1000);
  });


//Constructing a Promise Object

  const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
  // Write your code below:
  
  const myExecutor = (resolve, reject) => {
    if (inventory.sunglasses > 0) {
      ('Sunglasses order processed.');
    } else {
      ("That item is sold out.");
    }
  };