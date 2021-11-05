// Modules
const request = require('request');

// Retrieving data from command line and assigning them to variables
const args = process.argv.slice(2);
const breed = args[0];
const site = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(site, (error, response, body) => { // Request function takes in URL and its contents
  if (error) { // If error occurs, calls error
    console.error(error);
  }
  
  // Converts body information into an object and stores in data
  const data = JSON.parse(body);
  if (data[0] === undefined) { // if no info was able to be pulled
    return console.error(`Sorry but ${breed} could not be found.`);
  } else {
    return console.log(data[0]["description"]); // prints description found in first array
  }
  
});


