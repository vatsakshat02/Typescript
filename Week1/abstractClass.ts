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