//objects
const user = {
    name:'akshat',
    email:'abc@gmail.com',
    isActive: true
}

function createUser({name:string, isPaid:boolean}){

}

createUser({name:"akshat", isPaid:true})
createUser({name:"akshat", isPaid:true, email:'abc@gmail.com'}) //thsi will give error as there is no email parameter so to tackle this
let users = {name:akshat,isPaid:true,email:'abc@gmail.com'}
createUser(users); //as you can see this will not give an error

//what happens when we expect our return type as an object
function loggedUser():{}{ //{}menas we are expection our return type to be an object
    return {}
}
//type variable
//basically here we have created our own datatype and this helps us to use this more than once 
type User = {
    name:string;
    email:string;
    isActive:boolean
}
//here we are mentioning the parameter user should be of the type User
function CreateUser(user: User): User{
        return {name:'akshat',email:'abc@gmail.com',isActive:true}
}

CreateUser({name:"",email:"",isActive:true})
export{}