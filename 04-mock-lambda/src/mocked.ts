import { Calculator } from "./main";

export class MockedCalculator extends Calculator {
    operation:any;
    public override calculate( a: number, b: number, operation: (a: number, b: number) => number) {
        this.operation = operation;
        return 3;
    }
}