/*
 * Various third-party functions. These have been developed by someone
 * who may or may not be reliable.
 */
const THIRD_PARTY = {
    // this is a normal function - its runs asynchronously
    normal: (callback) => {
        setTimeout(callback, 1000);
    },
    // this function cannot be relied on to run asynchronously
    sometimes_a_sync: (callback) => {
        if (Math.random() < 0.5) {
            console.log('running synchronously');
            callback();
        } else {
            console.log('running asynchronously');
            setTimeout(callback, 1000);
        }
    },
    // this function runs the callback twice; this may not
    //  be what the caller intended
    twice: (value, callback) => {
        setTimeout(callback, 1000, ++value);
        setTimeout(callback, 1000, ++value);
    },
    // you can call me, but I won't call you
    hollywood: (callback) => {
        console.log('You can call me, but I don\'t have to call back');
    }
};

export {THIRD_PARTY};