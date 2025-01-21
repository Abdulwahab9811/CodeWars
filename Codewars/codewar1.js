// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                               



function generateHashtag (str) {
    //trim is used to remove space i the stirngs
    const words = str.trim().split(/\s+/);
    
    // Capitalize the first letter of each word and join them together
    const hashtag = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    
    //if hashtag is empty or is more then 140 return false
    if(hashtag === '' || hashtag.length > 140) {
      return false;
    }
    
    return '#' + hashtag;
  }
  
  console.log(generateHashtag(" Hello there thanks for trying my Kata"));
  console.log(generateHashtag("    Hello     World   "));
  console.log(generateHashtag("")); 
  console.log(generateHashtag("Helloworld")); 



  /////////////////////////////////////////////////////




// switching to capital letter for  each first letter of each word inside string.//

  String.prototype.toJadenCase = function () {
    return this.split(' ') // Split the string into an array of words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(' '); // Join the words back into a single string
  };
  
  // Example usage
  const str = "how can mirrors be real if our eyes aren't real";
  console.log(str.toJadenCase()); 
  // Output: "How Can Mirrors Be Real If Our Eyes Aren't Real"