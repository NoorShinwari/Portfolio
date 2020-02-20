/*
Hello, object
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.

let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;


Check for emptiness
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
Open a sandbox with tests.

let obj = {};                                             |_____________________________________________
function isEmpty(obj) {                             //////|function isEmpty(obj) {                      \
  for (let key in obj) {                            //////|  let isEmpty = true;                         \
    return false;                                   //////|  for (let key in obj) {                       \
  }                                                 //////|    console.log("Hey we've got a key", key)     \
  return true;                                      //////|    isEmpty = false;                            /
}                                                   //////|   };                                          /         
                                                    //////|   return isEmpty                             /
/*                                                  //////|};                                           /
Constant objects?                                         |____________________________________________/
importance: 5
Is it possible to change an object declared with const? What do you think?
const user = {
  name: "John"
};

// does it work?
user.name = "Pete";

const user = {
    name: "John",
};
user.name = "Pete". // yes, it does work. but you cannot change the value of user forexample user = "Pete" this is an error.


/*
Sum object properties
importance: 5
We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.
*/
/*
function sum(salaries) {
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  return sum;
}
*/

/*
Multiply numeric properties by 2
importance: 3
Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here.
*/
let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};
function multiplyNumeric(menu) {
  for (let key in menu) {
    if (typeof menu[key] == 'number') {
      menu[key] *= 2;
    }
  }
}
multiplyNumeric(menu);
