// // compare the two code fragments:
// // the first one uses finally to execute the code after try..catcg:

// try {
//   work work
// } catch (e) {
//   handle errors
// } finally {
//   cleanup the working space
// }
// // The Second fragment pts the cleaning right agter try ... catch:

// try {
//   work work
// } catch (e) {
//   handle errors
// }

// cleaning up the working space
/**
 * The difference becomes obvious when we look at the code inside a function.

The behavior is different if there’s a “jump out” of try..catch.

For instance, when there’s a return inside try..catch.
 The finally clause works in case of any exit from try..catch, 
 even via the return statement: right after try..catch is done, 
 but before the calling code gets the control.





function f() {
  try {
    alert('start');
    return "result";
  } catch (e) {
    /// ...
  } finally {
    alert('cleanup!');
  }
}

f(); // cleanup!
…Or when there’s a throw, like here:









function f() {
  try {
    alert('start');
    throw new Error("an error");
  } catch (e) {
    // ...
    if("can't handle the error") {
      throw e;
    }

  } finally {
    alert('cleanup!')
  }
}

f(); // cleanup!
It’s finally that guarantees the cleanup here.
 If we just put the code at the end of f,
  it wouldn’t run in these situations.
 */
