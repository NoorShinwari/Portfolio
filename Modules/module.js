//                              What is a module?                           //
/////////////////////////////////////////////////////////////////////////////

// A module is just a file. One script is one module.
// Modules can load each other and use special directives export and import to
// intechange functionality, call functions of one module from another one:

/**
 * export: keyword lables variables and functions that should be accessible from outside the current module.
 * import: allows the import of functionality from other modules.
 */

// For example:

//in File: sayHi.js
export function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

//in File: main.js
import { sayHi } from './sayHi.js';
console.log(sayHi);
sayHi('Noor');

/////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
// A module code is evaluated only the first time when imported
/////////////////////////////////////////////////////////////////////////////////////////

// If the same module is imported into multiple other places, its code is executed only the first time,
// then exports are give to all importers.

// file: alert.js
alert('Module is evaluated!');

//Import the same module from different files

// file: 1.js
import './alert.js'; // Module is evaluated!

// file: 2.js
import './alert.js'; // (shows nothing);

// In practice, top-level module code is mostly used for initialization, creation of internal
// data structures, and if we want somthing to be reusable - export it.

// Advance Example:

//file: admin.js

export let admin = {
  name: 'Noor'
};

// File: 1.js
import { admin } from './admin.js';
admin.name = 'Pete';

// File: 2.js
import { admin } from './admin.js';
console.log(admin.name); // Pete

// Both 1.js and 2.js is imported the same object
// Changes made in 1.js are visible in 2.js

// The module is executed only once. Exports are generated and then they are shared between importers
// so if something changes the admin object, other modules will see that.
///////////////////////////////////////////////////////////////////////////////////////////

//File: admin.js
export let admin = {};

export function sayHi() {
  alert(`Ready to serve, ${admin.name}!`);
}

// In init.js, the first script of our app, we set admin.name.
// Then everyone will see it, including calls made from inside admin.js iteself:

//File: init.js
import { admin } from './admin.js';
admin.name = 'Noor';

// Another module can also see admin.name:

// File: other.js
import { admin, sayHi } from './admin.js';

alert(admin.name); // Noor

sayHi(); // Ready to serve, Noor!

//////////////////////////////////////////////////////////////////////////////////////////////

// In a module, "this" is undefined:
// in a module, top-level this is undefined:

<script>alert(this); // window</script>;

<script type="module">alert(this); // undefined</script>;
////////////////////////////////////////////////////////////////////////////////////////////////
