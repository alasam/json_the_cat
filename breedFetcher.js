// Modules
const request = require('request');

// function takes in the breed of the cat and calback from index.js as the parameters
const fetchBreedDescription = function(breed, callback) {  
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => { // Request function takes in URL and its contents
    if (error) { // If error occurs, calls error
      callback(error, null);
    }
  
    // Converts body information into an object and stores in data
    const data = JSON.parse(body);
    if (data[0] === undefined) { // if no info was able to be pulled
      return callback(`Sorry but ${breed} could not be found.`, null);
    } else {
      return callback(null, data[0]["description"]); // prints description found in first array
    }
  
  });
};


module.exports = { fetchBreedDescription };
