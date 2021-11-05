// index.js
// Module
const { fetchBreedDescription } = require('./breedFetcher');

// Retrieving data from command line and assigning them to variables
const args = process.argv.slice(2);
const breed = args[0];
const site = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

// function as breedFetcher
fetchBreedDescription(breed, (error, desc) => {
  if (error) { // when error appears
    console.log('Error fetch details:', error);
  } else { //when description is called
    console.log(desc);
  }
});

module.exports = {
  fetchBreedDescription,
};