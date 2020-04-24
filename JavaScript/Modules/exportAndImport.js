//                      Export and Import                           ///
//////////////////////////////////////////////////////////////////////

//Export before declarations:

//we can label any declaration as exported by placing export before it,
// be it a variable, function or a class.

// export an array:

export let months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

// export a constant

export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
  constructor(name) {
    this.name = name;
  }
}

// No Semicolons after export class/functions

////////////////////////////////////////////////////////////////////////////////////////////////

// Export apart from declarations

//Also we can put export separately;

//file: say.js
function sayHi(user) {
  alert(`Hello, ${user}`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export { sayHi, sayBye }; // a list of expored variables

//Import*

//File: main.js
import { sayHi, sayBye } from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!

// But if there's a lot to import, we can import everthing as an object using import* as <obj>, for instance:

// File: main.js
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');

/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

//Import "as";

//We can also use as to import under different names.
//For instance, let's import sayHi into the local variable hi for brevity and import sayBye as bye:

//File: main.js
import { sayHi as hi, sayBye as bye } from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!

//__________________________________________________________________________________

//Export "as";
// let's export functions as hi and bye;

//File: say.js

export { sayHi as hi, sayBye as bye };
// Now hi and bye are official names for outsiders, to be used in imports:

//File: main.js
import * as say from './say.js';

say.hi('John'); // Hello, John!
say.bye('John'); // Bye, John!

//////////////////////////////////////////////////////////////////////////////////////
//                          Export default                                      /////
/////////////////////////////////////////////////////////////////////////////////////

// File: user.js

export default class User {
  // just add "default"
  constructor(name) {
    this.name = name;
  }
}
// There may ne only one export default per file;
//... And then import it without curly braces:

// File: main.js
import User from './user.js'; // not {User}, just User

new User('John');

/////////////////////////////////////////////////////////////////////////////////////

//export default without name.

export default class {
  // no class name
  constructor() {
    /*... */
  }
}

export default function(user) {
  alert(`Hello, ${user} !`);
}

// export a single value, without making a variable
export default ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//Not giving a name is fine, because export default is only one per file,
//so import without curly braces knows what to import.

/////////////////////////////////////////////////////////////////////////////////////

//                              The "default" name                                  //

// in some situations the default keyword is used to reference the default export:

function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// same as if we added "export default" before the function
export { sayHi as default };

//Another situation, exports one main "default" thing and a few named ones;

//File: user.js
export default class User {
  constructor(name) {
    this.name;
  }
}

export function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// How to import the default export along with a named one:

//File: main.js
import { default as User, sayHi } from './user.js';

new User('John');

// And, finally, if importing everything * as an object, then the default property is exactly the default export:

// File: main.js

import * as user from './user.js';

let User = user.default; // the default export
new User('John');
