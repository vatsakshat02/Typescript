//functions 
function addtTwo(num:number){ //we have to mention that it is a number otherwise it will assign any data type to it
    return num + 2
}

function getUpper(val:string ){
    return val.toUpperCase()
}

function signUpUser(name: string ,email:string,isPaid: boolean){

}
let loginUser = (name:string,email:string,isPaid: boolean = false) =>{ //basically an arrow function

}
addTwo(5);
getUpper('akshat')
signUpUser('akshat','abc@gmaiil.com',false);
loginUser('a','a@a.com') //it will not raise an issue as we have already provided the default value of isPaid

function subtractTwo(num:number):number{ //the second number is the type of data that we expect from return
    return 'akshat' //so this will give us an error
}

//how to assign type to return in the arrow functions
const getHello = (s:string):string =>{
    return ""
}

//map function
const heros = ['thor','ironman','superman'];

heros.map((hero):string => {
    return `my heros is ${hero}`}
)

export{}