import {THIRD_PARTY} from'./third_party_functions_with_promises.js';
const normal = THIRD_PARTY.normal;
const sometimes = THIRD_PARTY.sometimes_a_sync;
const twice = THIRD_PARTY.twice;
const hollywood = THIRD_PARTY.hollywood;

let value = 42;

// this should run normally, no surprises
// (function() {
//     normal()
//         .then(() => console.log(`normal resolved value = ${value}`));
// })();

// this should run randomly sync or async
// the function can run asynchronously or synchronously
// when asynchronously, things are as above for the normal function
// when synchronously, the promise makes it look as if it ran
//  asynchronously so the result will be the same
// (function() {
//     sometimes()
//         .then(() => console.log(`sometimes resolved value = ${value}`));
// })();

// this should run async twice
// (function() {
//     twice().then(()=>{
//         console.log(`twice resolved value = ${value}`)
//     })
// })();

// // this doesn't run the callback at all
// (function() {
//     hollywood().then(()=>{
//         console.log(`hollywood resolved value = ${value}`)
//     })
// })();

// Example with await
 (async function() {
    await normal();
    console.log(`await value is %s`,value);
 })();

value++;

/*
step1(function(value1) {
    step2(value1, (value2) => {
        step3(value2, (value3) => {
            step4(value3, (value4) => {
                console.log(`Doing something awesome in step 4 with value = ${value4}`);
            });
        });
    });
});
*/

function promisedStep1(resolve, reject) {
    resolve(value);
}

function promisedStep2(value) {
    return value;
}

//other functions

(async () => {
    let value = await new Promise(promisedStep1);
    value = promisedStep2(value);
    //other steps
    console.log(`Doing something awesome in step 4 with value = ${value}`);
})();
