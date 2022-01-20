import {THIRD_PARTY} from'./third_party_functions_with_callbacks.js';
const normal = THIRD_PARTY.normal;
const sometimes = THIRD_PARTY.sometimes_a_sync;
const twice = THIRD_PARTY.twice;
const hollywood = THIRD_PARTY.hollywood;

let value = 42;

// // this should run normally, no surprises
// (function() {
//     normal(() => {
//         console.log(`normal callbacked value = ${value}`);
//     });
// })();

// // this should run randomly sync or async
// (function() {
//     sometimes(() => {
//         console.log(`sometimes callbacked value = ${value}`);
//     });
// })();

// this should run async twice
(function() {
    twice(value, (value) => {
        console.log(`twice callbacked value = ${value}`);
    });
})();

// this doesn't run the callback at all
(function() {
    hollywood(value => {
        console.log(`hollywood callbacked value = ${value}`);
    });
})();

value++;