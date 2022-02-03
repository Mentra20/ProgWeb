import transaction from "./bank.js"

let account = {
    balance: 42,
    show_balance: function(){
        console.log("Balance = "+this.balance);
    },

}

function withdraw(amount) {
    transaction(account,amount).then((val)=>{
        console.log("Balance = "+val);
    }).catch((err)=>{
        console.log(err);
        account.show_balance();
    });
}