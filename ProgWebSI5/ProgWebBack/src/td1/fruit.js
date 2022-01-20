//COMMIT HISTORY OF YOU DON'T KNOW JS : https://github.com/getify/You-Dont-Know-JS/commit/0424741889ae8e175a4c899cc82dd91c409273f2#diff-88dd7429474b2422cf2df1b29731282a50720a239332d20fff7ce275f2f6140d



// creating an object literal ex nihilo
const fruit = {
    taste: 'fruity'
};

console.log(`a fruit tastes ${fruit.taste}`);
// or alternately...
console.log('in other words, a fruit tastes %s', fruit['taste']);
// note the different syntax in the above for printing stuff - use whichever

// creating an object with a prototype link to an existing object
const banana = Object.create(fruit);

// banana delegates its taste property to it prototype-linked object
console.info(`\ntaste is ${banana.hasOwnProperty('taste') ? '' : 'not '}a property of banana`);
console.info(`taste is ${'taste' in banana ? '' : 'not '}a property on banana's prototype chain`);
console.info(`so a banana does taste ${banana.taste}`);

// adding more properties to the banana object
banana.colour = 'yellow';
banana.shape = 'bananoid';
console.log('\nproperties of banana, including those inherited from fruit:');
for (let p in banana) {
    console.log(`banana.${p} = ${banana[p]}`);
}
console.log('\nonly banana\'s own properties');
Object.entries(banana).forEach(([key, value]) => {
    console.log(`banana.${key} = ${value}`);
});

// adding a method to the fruit object
fruit.getTaste = function () {
    // this refers to context of fruit
    return this.taste;
};

console.info(`\na fruit still tastes ${fruit.getTaste()}`);
// taste and getTaste are not properties of banana
// but banana can access them by delegation on it's prototype-linked
//  fruit object
console.info(`a banana also tastes ${banana.getTaste()}...`);
console.info(`...even though getTaste is ${banana.hasOwnProperty('getTaste') ? '' : 'not '}a function of banana`);

// creating an object with a prototype link to an existing object
const chiquita = Object.create(banana);
console.info('\nall properties and functions accessible to chiquita:');
// chiquita has no properties of it's own; they are accessed by delegation
//  along the prototype-link chain from banana and fruit
for (let p in chiquita) {
    console.info(`chiquita.${p} = ${chiquita[p]}`);
}

// different tastes
// changing the value of a property
// this actually adds the taste property to the banana object
banana.taste = 'like a banana';
console.info(`\ntaste is ${banana.hasOwnProperty('taste') ? '' : 'not '}a property of banana`);

console.info('\ndifferent tastes');
console.info(`a fruit tastes ${fruit.getTaste()}`);
console.info(`a banana tastes ${banana.getTaste()}`);
console.info(`a chiquita tastes ${chiquita.getTaste()}`);

// changing a function
// this actually adds the getTaste function to the banana object
banana.getTaste = function () {
    // calls fruit's getTaste method
    return `filling and ${Object.getPrototypeOf(banana).getTaste()}`;
};

console.info('\ngetting different tastes');
console.info(`a fruit tastes ${fruit.getTaste()}`);
console.info(`a banana tastes ${banana.getTaste()}`);
console.info(`a chiquita tastes ${chiquita.getTaste()}`);