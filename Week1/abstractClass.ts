//abstract classes are classes that dont need an object it helps to give structure to classes that doesnt inherit them
abstract class Takephoto{
        constructor(
            public cameraMode: string,
            public filter:string
        ){}

    abstract sepia():void
    getReeltime(): number{
        return 8
    }
}
//this is the use of it works like an interface but we can also use 

class Instagram extends Takephoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number

    ){
        super(cameraMode,filter)
    }
    sepia():void{
        console.log('sepia')
    }
}

//so like we can have generic classes
class Sellable<T>{
    public cart:T[] = []  //we have a cart T of particular data type T which is an array 

    addToCart(product:T){
        this.cart.push(product)
    }
}

//type of parameters suppose we have two generic parameter and we pass a value of number and we want number
//so we will use extend keyword to mention that the second parameter should be a number

function anotherFunction<T, U extends number>(valOne:T, valTwo: U){
    return{
        valOne,
        valTwo
    }
}

anotherFunction(3,"4") //it is giving an error cause we have extended the second part of generic para to number

export{}