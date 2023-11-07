{
// getter and setter
class BankAccount{
    public readonly id: number;
    public name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number){
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    // addDeposit(amount: number){
    //     this._balance = this._balance + amount
    // }

    // setter
    set deposit(amount: number){
        this._balance = this._balance + amount
    }

    // getter
    get balance(){
        return this._balance
    }

    // getBalance(){
    //     return this._balance
    // }
}

const goribManusherAccount = new BankAccount( 123, 'tufael', 40)

// goribManusherAccount.addDeposit(40) // call function
goribManusherAccount.deposit = 70

// const myBalance = goribManusherAccount.getBalance() // call function

const myBalance = goribManusherAccount.balance; // property like getter
console.log(myBalance);

}