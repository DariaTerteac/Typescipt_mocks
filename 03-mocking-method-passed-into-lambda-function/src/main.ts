export class ClassA {
  public doSomethingA(a: number, b: number, callback: (a: number, b: number) => string): string {
    const result = callback(a, b);
    return result;
  }

  public getSomethingA(): string {
    return "Test string A"
  }
}

export class ClassB {
  public doSomethingB(a: number, b: number, callback: (a: number, b: number) => string): string {
    const result = callback(a, b);
    return result;
  }

  public getSomethingB(): string {
    return "Test string B"
  }
}

export function main(): any {
  const aVar = new ClassA();
  const bVar = new ClassB();

  const aResult = aVar.doSomethingA(1, 2,
    (a, b) => `Hello World ${a} + ${b}, ${bVar.getSomethingB()}`
  );

  const bResult = bVar.doSomethingB(3, 4,
    (a, b) => `Hello World ${a} + ${b}, ${aVar.getSomethingA()}`
  );

  return { aResult, bResult };
}
