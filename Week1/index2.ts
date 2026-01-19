class taser{
    private _courseCount = 1
    protected count = 1
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
// supose you have to inherit a class 
class animal extends taser{
    isfamily:boolean
    getcoursecount(){
        this._courseCount //this will give an error so lets take xample for variable x and assign it protected then you can access that variable in its class as well as its subclass
    }
    getcount(){
        this.count //see it will not give an error
    }

}

export{}