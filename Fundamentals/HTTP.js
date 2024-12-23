// // Information to reach API
// const url = 'https://api.datamuse.com/words?sl=';

// // Selects page elements
// const inputField = document.querySelector('#input');
// const submit = document.querySelector('#submit');
// const responseField = document.querySelector('#responseField');

// // Asynchronous function
// const getSuggestions = () => {
//   const wordQuery = inputField.value;
//   const endpoint = `${url}${wordQuery}`;
  
//   fetch(endpoint, {cache: 'no-cache'}).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error('Request failed!');
//   }, networkError => {
//     console.log(networkError.message)
//   })
// }

// // Clears previous results and display results to webpage
// const displaySuggestions = (event) => {
//   event.preventDefault();
//   while(responseField.firstChild){
//     responseField.removeChild(responseField.firstChild);s
//   }
//   getSuggestions();
// };

// submit.addEventListener('click', displaySuggestions);

// Information to reach API
const apiKey = "<Your API Key>";
const url = "https://api.rebrandly.com/v1/links";

// Some page elements
const inputField = document.querySelector("#input");
const shortenButton = document.querySelector("#shorten");
const responseField = document.querySelector("#responseField");

// Asynchronous functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({ destination: urlToShorten });

  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      apikey: apiKey,
    },
    body: data,
  }).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Request failed!");
    },
    (networkError) => {
      console.log(networkError.message);
    }).then(jsonResponse) => {
      renderResponse(jsonResponse);
      }
    };
};

// Clear page and call Asynchronous functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
};

shortenButton.addEventListener("click", displayShortUrl);
