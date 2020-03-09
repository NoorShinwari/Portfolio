/**Uppercase the first character
importance: 5
Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

ucFirst("john") == "John";
Open a sandbox with tests. */

function ucFirst(str) {
  let newStr = str[0].toUpperCase() + str.slice(1);
  return newStr;
}

/*Check for spam
importance: 5
Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

The function must be case-insensitive:

checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
Open a sandbox with tests. */

function checkSpam(str) {
  let lowerSTr = str.toLowerCase();
  return lowerSTr.includes('viagra') || lowerSTr.includes('xxx');
}

/*Truncate the text
importance: 5
Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

The result of the function should be the truncated (if needed) string.

For instance:

truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

truncate("Hi everyone!", 20) = "Hi everyone!" */

function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + '...' : str;
}
