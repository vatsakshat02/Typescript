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