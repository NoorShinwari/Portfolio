/*
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
*/ ///CAN BE WRITTEN AS FOLLOWS
let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;
//let declare a new variable with only of values
let secondList = list.next.next;
//now change the value of the saved variable to null;
list.next.next = null;

//// We can join the two objects as follows
list.next.next = secondList;

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Recreating the above example with my own words
let family = { name: 'alpha' };

family.brother = { name: 'bravo' };

family.brother.brother = { name: 'charlie' };

family.brother.brother.brother = { name: 'delta' };

family.brother.brother.brother.brother = null;

let halfFamily = family.brother.brother;

family.brother.brother = null;

family.brother.brother = halfFamily;
