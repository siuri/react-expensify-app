// const person = {
//     name: 'Jung',
//     age: 40,
//     location: {
//         city: 'Dallas',
//         temp: 101
//     }
// };

// // const name = person.name;
// // const age = person.age;

// const {name: firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if(city && temperature) {
//  console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name:publisherName = 'Self-published' } = book.publisher;
// console.log(publisherName);

const address = ['5225 Las Colinas Blvd', 'Irving', 'Texas', '75039'];
const [ street, city, state = 'New York', zip] = address;
console.log(`You are in ${city} ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ itemName, small, medium, large ] = item;

console.log(`A medium ${itemName} costs ${medium}.`);

