//a syntactical contract that defines the shape of an object by specifying its properties and method signatures,
// without providing the implementation details
interface User{
    email:string,
    userid: number
    googleId?:string,
    startTrial():string,
    getCoupon(couponname: string, value:number):number
}
const akshat: User = {email:'akshat',userid:223,
    startTrial: () => {
        return 'akshat'
    },
    getCoupon: (coupon:'10%off',off:10){
        return 10
    }
}
export{}