fetch('https://swapi.co/api/people/')
  .then(response => response.json())
  .then(body => fetch(body.results);
