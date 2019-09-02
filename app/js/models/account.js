(function () {
    function Account(balance, type) {
        this.balance = balance;
        this.type = type;
    }

    Account.prototype.deposit = function (d) {

        this.balance = this.balance + d;
        return this.balance;
    }

    Account.prototype.withdrawal = function (w) {
        this.balance = this.balance - w;
        return this.balance;
    }


    function inherits(baseClass, childClass) {
        childClass.prototype = Object.create(baseClass.prototype);
    }

    function Premium(balance, type) {
        this.balance = balance + (balance * .05);
        this.type = type;
    }


    inherits(Account, Premium);

    Premium.prototype.transfer = function (from, to, amount) {
        from.balance -= amount;
        to.balance += amount;
        from.rebalance();
        to.rebalance();
    }

    Premium.prototype.deposit = function (d) {
        this.balance = this.balance + d;
        this.balance = this.balance + (this.balance * .05);
        return this.balance;

    }
    Premium.prototype.rebalance = function () {
        this.balance += this.balance * .05;
    }
}());