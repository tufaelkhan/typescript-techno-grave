{
// access modifiers
class BankAccount{
    public readonly id: number;
    public name: string;
    private balance: number;

    constructor(id: number, name: string, balance: number){
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    addDeposit(amount: number){
        this.balance = this.balance + amount
    }
    getBalance(){
        return this.balance
    }
}
const goribManusherAcccount = new BankAccount( 123, 'tufael', 30)
goribManusherAcccount.addDeposit(40)
const myBalance = goribManusherAcccount.getBalance()
console.log(myBalance);

}