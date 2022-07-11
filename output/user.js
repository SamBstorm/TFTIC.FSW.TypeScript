"use strict";
class User {
    /* Constructeur */
    constructor(login, password = "test1234=", gender) {
        this.login = login;
        this._password = password;
        this.gender = gender;
    }
    /* Propriétés */
    set password(v) {
        this._password = v;
    }
    get title_gender() {
        var _a, _b;
        if (((_a = this.gender) === null || _a === void 0 ? void 0 : _a.toLowerCase()) == 'm'.toLowerCase())
            return 'Mister';
        else if (((_b = this.gender) === null || _b === void 0 ? void 0 : _b.toLowerCase()) == 'f'.toLowerCase())
            return 'Miss';
        return 'Other';
    }
    /* Méthodes */
    check_login(login, password) {
        return this.login === login && this._password === password;
    }
}
