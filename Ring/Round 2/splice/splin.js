// let names = ["I"," enjoy", " walks", " in", " the", " park"]

// names.splice(1,3, " reading", " while")

// alert(names)


function warnTheSheep(queue) {
  /* Reversing the array and then finding the index of the wolf. */
  const position = queue.reverse().indexOf('wolf');
  /* A ternary operator. */
  return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}