class User{
    /* champs - Variables membres */
    public login : string;
    private _password : string;
    public gender : string | undefined;

    /* Propriétés */
    public set password(v : string) {
        this._password = v;
    }
    
    public get title_gender() : string{
        if(this.gender?.toLowerCase() == 'm'.toLowerCase())
            return 'Mister'
        else if( this.gender?.toLowerCase() == 'f'.toLowerCase())
            return 'Miss';
        return 'Other';
    }

    /* Constructeur */
    constructor(login : string, password : string = "test1234=", gender? : string ){
        this.login = login;
        this._password = password;
        this.gender = gender;
    }

    /* Méthodes */
    public check_login(login : string, password : string) : boolean{
        return this.login === login && this._password === password;
    }
}