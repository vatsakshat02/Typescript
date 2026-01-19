class User{
        email:string
        private readonly city: string = 'Jaipur'
        constructor(email:string,name:string){
            this.email = email;
            this.name = name
        }

}

const akshat =  new User("abc@gmail.com", 'akshat')
//you dont want to access the city variable so for that write private in front of it

class sser{
    email:string
    private readonly city: string = 'Jaipur'
    constructor(
        public emails:string,
        public name:string
    ){
        
    }

}
export{}