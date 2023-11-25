function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log("isLeapYear = : ", isLeapYear(2016));

interface Person {
  name: string;
  age: number;
}
const person: Person = {
  name: "Ramgopal",
  age: 26,
};
console.log("person:  ", person);
console.log("person:  ", person);
