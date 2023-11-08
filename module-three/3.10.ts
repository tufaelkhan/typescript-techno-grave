{
    // access modifiers
    class BankAccount{
        public readonly id: number;
        public name: string;
        protected _balance: number;
    
        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addDeposit(amount: number){
            this._balance = this._balance + amount
        }
        private getBalance(){
            return this._balance
        }
        getHiddenMethod(){
            return this.getBalance()
        }
    }
    
    // Children class
    class StudentAccount extends BankAccount{
        test(){
            this._balance
        }
    }
    const goribManusherAcccount = new BankAccount( 123, 'tufael', 30)
    goribManusherAcccount.addDeposit(40)
    const myBalance = goribManusherAcccount.getHiddenMethod()
    console.log(myBalance);
    
    
    }