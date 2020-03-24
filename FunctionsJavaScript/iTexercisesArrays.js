const students = [
  {
    name: 'Fabio',
    scores: [7, 6, 8, 5],
    age: 33
  },
  {
    name: 'John',
    scores: [8, 7, 9, 6],
    age: 28
  },
  {
    name: 'Alice',
    scores: [6, 8, 5, 8],
    age: 31
  },
  {
    name: 'Matt',
    scores: [5, 4, 8, 6],
    age: 36
  }
];

// Given the list of students above,
// create a list of all the users that are younger than 35.
// For each student object, calculate the average of their scores
// Then order the list by highest average first

// Example output:
//
//

const results = [
  {
    name: 'John',
    averageScore: 7.5
  },
  {
    name: 'Fabio',
    averageScore: 6.5
  },
  {
    name: 'Alice',
    averageScore: 6.75
  }
];

const lessAge = item => item.age < 35;
const average = item => ({
  name: item.name,
  averageScore: item.scores.reduce((a, b) => a + b, 0) / item.scores.length
});
const order = (a, b) => b.averageScore - a.averageScore;

function averAge(array) {
  let arr = array
    .filter(lessAge)
    .map(average)
    .sort(order);

  return arr;
}
console.log(averAge(students)); ///for node...

// const average = item =>
//   item.scores.reduce((a, b) => a + b, 0) / item.scores.length; //const average = students.map(item => item.scores.reduce((a, b) => a + b, 0) / item.scores.length);
// const lessAge = item => item.age < 35; //const lessAge = students.filter(item => item.age < 35); //
// const order = (a, b) => b.scores - a.scores; //const order = sort((a, b) => b.scores - a.scores);
// this is how i was trying................
