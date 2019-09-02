(function () {
    function User(name, accounts) {
        this.Name = name;
        this.Accounts = accounts;
    }

    function Bank(name, user) {
        this.Name = name;
        this.User = user;
    }
}());