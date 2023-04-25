export function summ(x: number, y: number): number {
    return x + y;
}
export default function sumAndIncreaseResultOnTwo(x: number, y: number): number {
    const result = summ(x, y) + 2;
    return result;
}
