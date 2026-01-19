class taser{
    private _courseCount = 1
    email:string
    private readonly city: string = 'Jaipur'
    constructor(
        public emails:string,
        public name:string
    ){}

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get coursecount():number{
        return this._courseCount;
    }
    
    set coursecount(countName){
        if(countName<=1){
            throw new Error("this is an error")
        }
        this._courseCount = countName
    }
    private deleteToken(){
        console.log('token deleted') //private methods
    }
}

export{}