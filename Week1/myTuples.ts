//tuples are for more restriction they are here to ensure that elements are in a specific order
let tUser: [string,number,boolean] //basically used in api calls as tehre is so much data that come in specific order
tUser = ['a',1,true]
tUser = [true,'1',1]//this will give error as it is not in the correct order

type User = [number | string]
const newUser = [112,"abc@gmail.com"]
newUser[1] = '111'
//now here comes the problem of tuple it is treating newUser as an array so you can push things in the type with no error
newUser.push(true) //idk why its giving an error maybe they fixed it