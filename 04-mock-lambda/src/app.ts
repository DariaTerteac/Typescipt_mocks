import { Calculator } from "./main";

export function execute(a: number, b: number) {
    const calculator: Calculator = new Calculator();
    const multiply = calculator.calculate( a, b, (a, b) => a * b);
    return multiply;
}
