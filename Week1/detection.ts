//narrowing basically is teh process of narrowing down the type of data we are working with
//in javascript the issue is that by using typeof keyword it means [1,2,3] as an object but it is array of numbers
//it treats null as an object which is not good practice
function getNum(val:string | number){
    if(typeof val === 'string'){
        return val.toLowerCase()
    }
    return val + 2
}

function provideID(val:string | null){
    if(!val){
        console.log("please provide the value of val")
        return
    }
    val.toLowerCase();
}