// Get a reference to the container where the API results will be displayed
var resultsContainer = document.getElementById('api-results');

// Fetch data from the API
fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
 .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
 })
 .then(data => {
    // Display the fetched data in the container
    resultsContainer.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
 })
 .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
 });