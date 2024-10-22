const people = [
  {
    name: "James Bond",
    age: 40,
  },
  {
    name: "Peter Parker",
    age: 20,
  },
  {
    name: "Harry Potter",
    age: 17,
  },
  {
    name: "Ron Wesley",
    age: 17,
  },
];

const groupedByName = Object.groupBy(people, (person) => person.age);

console.dir(groupedByName);
