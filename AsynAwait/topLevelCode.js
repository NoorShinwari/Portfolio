(async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/users/2');
  let user = await response.json();
  console.log(response);
  console.log(user);
})();
