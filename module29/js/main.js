//ARRAYS
//DATA types ['','','']


var programingLanguages = ['Javascript','PHP','Python'];

console.log(programingLanguages)

console.log(programingLanguages[0])
console.log(programingLanguages[1])
console.log(programingLanguages[2])

programingLanguages.push('Java');
console.log(programingLanguages)

programingLanguages.pop();
console.log(programingLanguages)

programingLanguages.unshift('C#');
console.log(programingLanguages)

programingLanguages.shift();
console.log(programingLanguages)

programingLanguages.splice(0,2,'Ruby');
console.log(programingLanguages)

console.log(Math.random()*5);
console.log(Math.floor(Math.random()*5));

var places = ["London", "Paris", "Roma", "Berlin"]

//destrukturimi

var [firstPlace, secondPlace, thirdPlace] = places;
console.log(thirdPlace);

var numbers = [1,2,3,4,5,6,7,8,9,10]

var [firstNumber,secondNumber, ...otherNumbers] = numbers;

console.log(firstNumber)
console.log(secondNumber)
console.log(otherNumbers.toString());

var friendsNames = ['Agnor','Ledi','Enes','Diart','Drin'];

console.log(friendsNames)

console.log(friendsNames[1])

var randomNumbers = [1,2,3,4,5];

randomNumbers.push('4');
console.log(randomNumbers)

randomNumbers.shift();
console.log(randomNumbers)

randomNumbers.splice(2,3,3,4,5,6);
console.log(randomNumbers)

console.log(randomNumbers)



