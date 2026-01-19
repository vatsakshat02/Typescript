//a syntactical contract that defines the shape of an object by specifying its properties and method signatures,
// without providing the implementation details
interface User{
    email:string,
    userid: number
    googleId?:string,
    startTrial():string,
    getCoupon(couponname: string, value:number):number
}

//suppose you miss the property that you want to add or you took someone else code and they have defined their interface
//and you just wanna add property to it so basically you can reopen the interface like this


interface User{
    githubtoken:string
}
const akshat: User = {email:'akshat',userid:223,
    startTrial: () => {
        return 'akshat'
    },
    getCoupon(coupon:'10%off',off:10){
        return 10
    },
    githubtoken:'aassdd'
}
//suppose you want inheritance now for that
interface Admin extends User {
    role: 'admin' | 'learner'
}
const zeeku : Admin = {
    email:'a',
    userid:1,
    startTrial: () => {
        return 'hello'
    },
    getCoupon(coupon: "20%off", off:20){
        return 20
    },
    githubtoken:'aassdd',
    role:"admin"
}
export{}