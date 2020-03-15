let company = {
  sales: [
    {
      name: 'John',
      salary: 1000
    },
    {
      name: 'Alice',
      salary: 1600
    }
  ],

  development: {
    sites: [
      {
        name: 'Peter',
        salary: 2000
      },
      {
        name: 'Alex',
        salary: 1800
      }
    ],

    internals: [
      {
        name: 'Jack',
        salary: 1300
      }
    ]
  }
};
//PARAPHRASING//
/*
Company is an object which has two properties, prop1 = sales, prop2 = development.
prop1 has a value of an array [] which has two objects each with two properties and two values,
prop2 has a value of an object which has two properties prop¹= sites, prop²=internals
now prop¹ has a value of an array with two other objects each with two other properties and values
while prop² has value of an array with one object with two properties and values

OBJECT = {
    prop1:[{prop¹:value¹,prop²:value²},{prop¹:value¹,prop²:value²}]
    prop2:{
        prop¹: [{prop¹:value¹,prop²:value²},{prop¹:value¹,prop²:value²}]
        prop²:[{prop¹:value¹,prop²:value²}]
    }
}
*/
