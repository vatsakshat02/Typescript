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
createUser(users);

//what happens when we expect our return type as an object
function loggedUser():{}{ //{}menas we are expection our return type to be an object
    return {}
}
export{}