export class Calculator {
    public calculate( a: number, b: number, operation: (a: number, b: number) => number) {
        return operation(a,b);
    }
}

