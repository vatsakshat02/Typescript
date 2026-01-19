//abstract classes are classes that dont need an object it helps to give structure to classes that doesnt inherit them
var Takephoto = /** @class */ (function () {
    function Takephoto(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    Takephoto.prototype.getReeltime = function () {
        return 8;
    };
    return Takephoto;
}());
