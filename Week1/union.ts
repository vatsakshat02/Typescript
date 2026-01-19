//if we dont know the type of data in your variable you use union
let score: number | string | boolean = 33
score = 55
score = "55"
score =  true

//we can create two multiple types and assign them to a variable using union
type User = {
    name:string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let zeeku: User | Admin = {name:'k',id:334}

zeeku = {username:'h',id:334}

//also for clarity
function getID(id:number | string){
    if(typeof id === "string"){
        id.toLowerCase();  //this is important cause without this you wont be able to use tolowercase property as it treats the id as number or string

    }
}

getID(3);
//to have multiple types in array
const data1: number[] = [1,2,3]
const data2: string[] = ['1','2','3']
const data3: (number|string)[]=[1,'2',4] //thats how you make your array have multiple types
export{}