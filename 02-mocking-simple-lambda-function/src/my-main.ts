export class MyClass {                                     //NOT TESTING MYCLASS
    acceptLambda(lambda: (str: string) => string) {
        return lambda("original string");
    }
}

export function myMain() {
    const myClass = new MyClass();
    return myClass.acceptLambda(                                   //need to mock this (acceptLambda)
        (input) => {
            return input                                           //need to test this
        })
}
