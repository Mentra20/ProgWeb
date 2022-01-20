/*
 * Various third-party functions. These have been developed by someone
 * who knows about promises and is therefore pretty reliable.
 */
var THIRD_PARTY = {
    // this is a normal function - its runs asynchronously
    normal: () => {
        return new Promise((resolve) => {
            // console.log('doing async stuff');
            setTimeout(() => {
                // console.log('promise resolved');
                resolve();
            }, 1000);
        });
    },
    // this function cannot be relied on to run asynchronously
    //  but the promise behaves as if it had run asynchronously in
    //  both cases
    sometimes_a_sync: () => {
        return new Promise((resolve) => {
            if (Math.random() < 0.5) {
                console.log('doing async stuff');
                setTimeout(() => {
                    // console.log('promise resolved');
                    resolve();
                });
            } else {
                console.log('doing sync stuff');
                // console.log('promise resolved');
                resolve();
            }
        });
    },
    // this function runs the resolution twice; this may not
    //  be what the caller intended, but the promise only lets
    //  it be run once
    twice: () => {
        return new Promise((resolve) => {
            // console.log('doing async stuff');
            setTimeout(() => {
            // console.log('promise resolved twice');
            resolve();
            resolve();
            }, 1000);
        });
    },

    // this function returns a Promise but never resolves is
    hollywood: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Not resolving any stupid promises');
            }, 1000);
        });
    }
};

export {THIRD_PARTY};