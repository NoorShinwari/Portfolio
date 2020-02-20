// what is a crud operation
// c = create
// r = read
// u = update
// d = delete

let todos = [
  { id: 1, text: 'Learn JavaScript', completed: true },
  { id: 2, text: 'Seek fo a job', completed: false },
  { id: 3, text: 'Forget everything' }
];

// function showTodos() {
//     let html = `
//     <ul>
//         <li>Learn JavaScriopt</li>
//         <li>Seek fo a job</li>
//         <li>Forget everything</li>
//     </ul>`
//     return html
// }
// instead of this we do as following
function showTodos() {
  //1. loop over all the todos
  //2. for everz todo:
  // 1. create '<li>¼{todo.text}</li>`
  // 2. concatenate to the html
  let html = `
    <ul>
        ${todos.map(todo => {
          return `<li>${todo.text}</li>`;
        })}
    </ul>`;
  return html;
}
