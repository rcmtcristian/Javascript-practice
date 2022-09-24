// for each array example
// const petNames = ["mike", "feil", "bob"]
// petNames.forEach(petNames => {
//   alert(petNames)
// });

// petNames()


// // for of example
// // for (const myElement of myArray) {
// //   // Use myElement to access each array element one by one
// // }
// const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
// for (const movie of movies) {
//   console.log(movie);
// }

//forEach


// let musketeers = ["athos", "porthos", "aramis"]

// musketeers.forEach(musketeers => {
//   console.log(musketeers + " D'Artagnan")
  
 
// })
// musketeers()

// //for
// let musketeers = ["athos", "porthos", "aramis"]

// for(let i = 0; i < musketeers.length - 2; i++){
//   console.log(musketeers)
// }

//for of

// const musketeers = ["athos", "porthos", "aramis"]

// for ( const musketeer of musketeers){
//   console.log(musketeer)
// }


const values = [4,6,7,3,6,7,5]

for (const value of values){
 let value = values.reduce((a,b) => a + b)
  console.log(value)
}

