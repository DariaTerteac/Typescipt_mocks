export function functionA(x: number, y: number): number {
    return x + y;
}
export default function functionB(x: number, y: number): number {
    const result = functionA(x, y) + 2;
    return result;
}
