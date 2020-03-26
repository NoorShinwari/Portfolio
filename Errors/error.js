function generateError() {
  try {
    console.log('Before errors');

    // there will be errors
    lalala;
    console.log('after errors');
  } catch (err) {
    // ArrayIndexOutOfBoundsException extends RRuntimeExcetion extends exception
    console.log('Error:', err);
  } finally {
    console.log('Finally');
  }
}
/////////////////////////////////////////////////////////////
//THE try...catch syntax...
// it has two main blocks: try and catch:
try {
  //code....
} catch (err) {
  //error handling
}

/////////////////////////////////////////////////////////////////
//An Exmple:

try {
  alert('start of try runs');
  alert('End of try runs');
} catch (err) {
  alert('Catch is ignored, because there are no errors');
}
/////////////////////////////////////////////////////////////////////////
//EXAMPLE WITH AN ERROR:

try {
  alert('Start of try runs');
  lalalal;
  alert('End of try (never reached');
} catch (err) {
  alert('Error has occurred!');
}

/////try ...catch only works for runtime errors
//// try..catch works synchronously...
// if an exception happens in scheduled code like in setTimeout then try...catch wont catch it..

try {
  setTimeout(function() {
    noSuchVariable;
  }, 1000);
} catch (e) {
  alert('wont work');
}

// it didnt work and i know the reason
//the function itself is executed later when the engine has already left the try..catch construct
// to catch it , try..catch must be inside that function.

///EXAMPLE

setTimeout(function() {
  try {
    noSuchVariable;
  } catch (error) {
    alert('error is caught here!');
  }
}, 1000);
// it worked..
////////////////////////////////////////////////////

///////////////ERROR OBJECT////////////////////////
// when an error occurs, javaScript generates an object containing the details about it,
// the object is then passed as an argument to the catch;

try {
  //.....
} catch (err) {
  //...
}

///////////name, messege and stack...
////For example..

try {
  lalala;
} catch (err) {
  alert(err.name);
  alert(err.messege);
  alert(err.stack);
  alert(err);
}

/////////////////////////////////////////////////////////////////////////////////
/////                    OPTIONAL "catch" BINDING                     ////////////
/////////////////////////////////////////////////////////////////////////////////

//if we dont need error details, catch may omit it;

try {
  //..
} catch {
  //..
}

//////////////////////////////////////////////////////////////////////
///Using "try...catch"
///////////////////////////////////////////////////////////////////////

let json = '{"name" : "John", "age" : 30}'; // data from the server

let user = JSON.parse(json); // convert the text representation to JS object
// now user is an object with properties from the string
alert(user.name);
alert(user.age);

/////////////////////////////////////////////////////////////////

let json = '{bad json}';
try {
  let user = JSON.parse(json);
  alert(user.name);
} catch (e) {
  alert(
    "Our apologies, the data has errors, we'll try to request it one more time."
  );
  alert(e.name);
  alert(e.messege);
}

//////////////////////////////////////////////////////////////////////
//Throwing our own errors///////////////////////////

let json = '{"age" : 30}';

try {
  let user = JSON.parse(json); //
  alert(user.name);
} catch (e) {
  alert("doesn't execute");
}

// in the console it showed undefined but it didnt execute the catch part..

//////////////////////////////////////////////////////////////////////////////
//                      "Throw" operator                         /////////////
//////////////////////////////////////////////////////////////////////////////

// the throw operator generates an error.
//syntax...

//throw <error object>//
/** Built in constructors for standard errors:
 * Error
 * SyntaxError
 * ReferenceError
 * TypeError
 * and others
 * can be used to create error objects as well.
 * the sytax is:
 *
 * let error = new Error(message);
 * let error = new SyntaxError(messege);
 * let error = new ReferenceError(messege);
 */

let error = new Error('Things happen o_0');

alert(error.name);
alert(error.message);

///////////////////////////////////////////////////////////////////////////
//the kind of error JSON.parse generates:

try {
  JSON.parse('{ bad json o_0}');
} catch (e) {
  alert(e.name);
  alert(e.message);
  alert(e.stack);
}

///////////////////////////////////////////////////////////////////7
/// let's throw an error.
/////////////////////////////////////////////////////////////777

let json = '{"age": 30}';
try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError('Incomplete data: no name');
  }
  alert(user.name);
} catch (e) {
  alert('JSON Error: ' + e.message);
}

//////////////////////////////////////////////////////////////////////////////////7
///////////////////////////////////////////////////////////////////////////////////
//////////////           Rethrowing                           /////////////////////
//////////////////////////////////////////////////////////////////////////////////

let json = '{ "age" : 30}';

try {
  user = JSON.parse(json); // no let before user
} catch (err) {
  alert('JSON Error: ' + err);
}
//it works fine on my console, it is strange but it should have given me an error.

////////////////////////////////////////////////////////////////

////////////////       Rethrowing              //////////////////////

let json = '{ "age : 30 }';
try {
  let user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError('Incomplete data: no name');
  }
  blablabla();
  alert(user.name);
} catch (e) {
  if (e.name == 'SyntaxError') {
    alert('JSON Error: ' + e.message);
  } else {
    throw e;
  }
}
