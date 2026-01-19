//so lets discuss about generics it basically makes our code reusable 
//basic thinking is creating a component that can work over a variety of types rather than a sigle one


const score: Array<number> = [] //it means that score is an array that will contain the type [numbers]

//___ISSUE_1____: here we dont know what will be the type of val it can be boolean or string it doesnt make it resuable
function identityone(val : boolean | string): boolean | string{
        return val
}

//___ISSUE_2___: here we are using any so basically the problem with any is that it doesnt store the type so there is
//point using it
function identityTwo(val:any): any{
    return val
}

//___SOLUTION___: so our solution is using generics where we use type keyword so basically whatever is the type
//of argument that type will be locked and be used in parameter and return so this makes our code reusable
function identityThree<Type>(val:Type):Type{
    return val
}

identityThree(3) //number will be locked in as a type so now you can understand the definition
//___DEFINITION___:We’ve now added a type variable Type to the identity function. This Type allows us to capture 
//the type the user provides (e.g. number), so that we can use that information later. not definition of generics

//___SHORTCUT___:
function identityfour<T>(val:T):T{
    return val
}

//you can create your own type and send that as a parameter like create your own inetrface and instead of 
//<T> write the name if the interface


function getSearchProducts<T>(product:T[]):T{ //here the T for teh return type means the value of a member from the array
            const myIndex = 3
            return product[myIndex]
}

//___ARROW_FUNCTIONS___
const getMoreSearchProduct = <T>(product:T[]):T => {
        const myindex = 3
        return product[myindex]
}