let myArray = [7, 23, 12, 64]

myArray.pop() // Removes from the end of the array; O(1)

myArray.push(7) // Adds to the end of the arrry; O(1)

myArray.shift() // Adds to the front of the  array; causes re-indexing; O(n)

myArray.unshift() // Removes from the front of the array; cause re-indexing: O(n)

myArray.splice(1, 0, 'Yay') // Adds tom the middle of the array; causes re-indexing; O(n) 