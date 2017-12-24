import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };



// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// }); 

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// }); 

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     }).catch((e) => {
//         console.log('error: ', e);
//     })

// database.ref('expenses').on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Food',
//     note: 'Kroger',
//     amount: 111,
//     createdAt: 322323
// })

// database.ref('notes/-L0g9dMXHhAyvI-LbtBG').remove();

// database.ref('notes').push({
//     title: 'Course Topic',
//     body: 'React Native'
// });


// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });


// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('error wih data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(43);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 700);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch(() => {
//      console.log('Error fetching data', e)   
//     });

// database.ref()
// .remove()
// .then(() => {
//   console.log('removed');
// }).catch((e) => {
//     console('Did not remove it')
// });

// database.ref().set({
//     name: 'Jung Hyun Kim',
//     age: 41,
//     isSingle: true,
//     stressLevel: 6,
//     job: {
//         title: 'Front end developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Dallas',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company' : 'Amazon',
//     'location/city': 'Seattle'
// })

// database.ref().set('This is my data.');
// database.ref('age').set(42);
// database.ref('location/city').set('New York');

// database.ref('attributes').set({
//     weight: 73,
//     height: 150
// }).then(() => {
//     console.log('Data is updated');
// }).catch((e) => {
//   console.log('error updated:' + e);
// });

// console.log('I made a request to change the data.');
