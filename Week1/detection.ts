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

//type predicates
type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined  //if it isnt equal to undefined then it will return a true value otherwise it will return a false value
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    }
    else{
        pet
        return "bird food"
    }
}

//basically what happening is that over here first we check that if a pet is fish or bed using isFish function
//then we are selecting our food according to that function value if its true or false

//____DISCRIMINATED_UNION___
interface Circle{
    kind: 'circle',
    radius: number
}

interface Square{
    kind:'square',
    side:number
}

interface Rectangle{
    kind:'rectangle',
    length:number,
    width:number
}

type Shape  = Circle | Square | Rectangle

function  getTrueShape(shape:Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2
    }
    // return shape.side * shape.side
}

function getArea(shape: Shape){
    switch(shape.kind){
        case 'circle':
            return Math.PI * shape.radius ** 2
        case 'square':
            return shape.side * shape.side
        case 'rectangle':
            return shape.length * shape.width
        default:
            const _randomvariable: never = shape   //always have a default case assign to never so that it can catch a scene where we dont have case in the switch for a specific case
            return _randomvariable
    }
}


