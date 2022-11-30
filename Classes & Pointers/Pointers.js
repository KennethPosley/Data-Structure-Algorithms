let num1 = 4

let num2 = num1   //Example of when a pointer isn't in use; the second variable does not update to the new value.

console.log(num2)

let obj1 = {
    value: 22
}

let obj2 = obj1  // Example of when a pointer is used; the second variable declaration points to the first object declaration.

console.log(obj2);
