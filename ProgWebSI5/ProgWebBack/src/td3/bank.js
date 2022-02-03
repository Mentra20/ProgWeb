
function transaction(account, amount) {
    console.log('Bank is processing transaction');
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Customer withdrew ${amount}`);
            resolve(account.balance - amount);
            resolve(account.balance - amount);  // ignored
        }, 1000);
    });
}
export default transaction