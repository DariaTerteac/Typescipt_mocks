import { ClassA, ClassB, main } from "../src/main";

ClassA.prototype.getSomethingA = jest.fn().mockImplementationOnce(() => "mocked string A");
ClassB.prototype.getSomethingB = jest.fn().mockImplementationOnce(() => "mocked string B");

describe('check ClassA and ClassB', () => {
  it('should start with hello world', () => {
    //Act
    const result = main();

    //Assert
    expect(result.aResult.startsWith("Hello World")).toBe(true);
    expect(result.bResult.startsWith("Hello World")).toBe(true);

    expect(result.aResult.includes("mocked string B")).toBe(true);
    expect(result.bResult.includes("mocked string A")).toBe(true);
  })
});