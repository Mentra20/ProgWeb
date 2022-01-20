/**
 * Node.js provides a utility to modify some function with a callback
 * into a function returning a Promise.
 * The function is error-first callback style.
 * Pretty cool.
 * @author 2018 Peter Sander
 */

 const util = require('util');

 /**
  * Depending on the value of the first argument, this function either raises an
  * error message or does something normal.
  * However, determing what happens is asynchronous via a callback after a delay.
  * @param arg Indicates whether or not an error should be deemed to occur.
  * @param delay Delay before the callback function is invoked.
  * @param style Message indication whether callbacked or promised style.
  * @param callback Callback function with an error or a result.
  */
 function callbacked(arg, delay, style, callback) {
     setTimeout(() => {
         console.log(style);
         if (!arg) {
             callback('Error! error!', null);
         } else {
             callback(false, 'No worries');
         }
     }, delay);
 }
 
 // the callback function's first argument indicates error if truthy;
 //  no error otherwise
 
 // non-error call
 callbacked(true, 500, 'via callback...', (err, result) => {
     if (err) {
         console.error(err);
     } else {
         console.log(result);
     }
 });
 
 // error call
 callbacked(false, 1000, 'via callback...', (err, result) => {
     if (err) {
         console.error(err);
     } else {
         console.log(result);
     }
 });
 
 
 // convert function from callbacked to Promised
 // the callback (last) argument of callbacked disappears and now
 //  promised returns a Promise
 // if the callback err argument is truthy the promise is rejected;
 //  otherwise it is resolved
 const promised = util.promisify(callbacked);
 
 // non-error call
 promised(true, 2000, 'via promise...')
     // just the resolve function
     .then(result => {
         console.log(result);
     });
 
 // error call
 promised(false, 3000, 'via promise...')
     // needs both resolve and reject functions since the promise is rejected
     .then(undefined, err => {
         console.error(err);
     });
 
 // alternately, error call with catch
 promised(false, 4000, 'via promise catch...')
     // just the resolve function; error will be caught in catch
     .then(result => {
         console.log(result);
     })
     .catch(err => {
         console.error(err);
     });