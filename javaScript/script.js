//alert("Hello World")//
/* The next line will show a popup message */

const FIRST_NAME = "Noor";
const LAST_NAME = "Ullah";
const SPACE = " ";

// declare a variable named "full name" //
// it's value should be your first name <SPACE> your last name//
// e.g. "Noor Ullah" //
let fullName = FIRST_NAME + SPACE + LAST_NAME

const myAddress = 'Via Lemie, 47\n 10149 Torino (TO)\nItaly';

//an address usually consists of street name, civic number, zip code, city, province and country.//
// Declare a constant for everz piece of the address and then concatenate all in a multiline string called 'address'//

const STREET_NAME = 'Via Lemie';
const CIVIC_NUMBER = '47';
const ZIP_CODE = '10149';
const CITY = 'Torino';
const PROVINCE = 'TO';
const COUNTRY = 'Italy';
const NEW_LINE = '\n';
const COMMA = ',';
const OPEN_BRACES = '(';
const CLOSE_BRACES = ')';


let address = STREET_NAME + COMMA + SPACE + CIVIC_NUMBER + NEW_LINE + ZIP_CODE + SPACE + CITY + SPACE + OPEN_BRACES + PROVINCE + CLOSE_BRACES + NEW_LINE + COUNTRY


/**console.log(address)
 let admin
 let name = "John"
admin = name

alert(admin);**/

const NEW_ADDRESS = `${STREET_NAME}, ${CIVIC_NUMBER}
${ZIP_CODE} ${CITY} (${PROVINCE})
${COUNTRY}`

console.log(NEW_ADDRESS)

const WORK_EXPERIENCE = 'Worked as Salesman, Waiter, Receptionist,'
const MY_STUDIES = 'Studied Pre Medical, Foundation in Bussiness, Terza media, Coding'
const SOFT_SKILLS = 'Good at Time management, Problem Solving, Creativity, Decision making, Autonumus, Team Work, Team Leader, Quick Learner'
const LANGUAGES = 'Languages I speak are Pashto, Urdu, English, Italian, German'

let CV = `${fullName}
${address}
${WORK_EXPERIENCE}
${MY_STUDIES}
${SOFT_SKILLS}
${LANGUAGES}`

console.log(CV)
