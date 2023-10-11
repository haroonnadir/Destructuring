const person = {
  name: 'John Doe',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
};

const {
  name,
  age,
  address: { city, country }
} = person;

console.log(name);    // Output: John Doe
console.log(age);     // Output: 30
console.log(city);    // Output: New York
console.log(country); // Output: USA
