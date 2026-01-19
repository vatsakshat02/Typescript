"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var taser = /** @class */ (function () {
    function taser(emails, name) {
        this.emails = emails;
        this.name = name;
        this._courseCount = 1;
        this.count = 1;
        this.city = 'Jaipur';
    }
    Object.defineProperty(taser.prototype, "getAppleEmail", {
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(taser.prototype, "coursecount", {
        get: function () {
            return this._courseCount;
        },
        set: function (countName) {
            if (countName <= 1) {
                throw new Error("this is an error");
            }
            this._courseCount = countName;
        },
        enumerable: false,
        configurable: true
    });
    taser.prototype.deleteToken = function () {
        console.log('token deleted'); //private methods
    };
    return taser;
}());
// supose you have to inherit a class 
var animal = /** @class */ (function (_super) {
    __extends(animal, _super);
    function animal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    animal.prototype.getcoursecount = function () {
        this._courseCount; //this will give an error so lets take xample for variable x and assign it protected then you can access that variable in its class as well as its subclass
    };
    animal.prototype.getcount = function () {
        this.count; //see it will not give an error
    };
    return animal;
}(taser));
