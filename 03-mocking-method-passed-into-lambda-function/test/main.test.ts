import { ClassA, ClassB, main } from "../src/main";

beforeAll(() => {
  const mockedGetSomethingA = jest.fn(() => "mocked string A");   //replacing "Test string A" with mocked version
  jest.spyOn(ClassA.prototype, 'getSomethingA').mockImplementation(mockedGetSomethingA);    //providing mocked string in getSomethingA for each instance of Class A

  const mockedGetSomethingB = jest.fn(() => "mocked string B");   //replacing "Test string B" with mocked version
  jest.spyOn(ClassB.prototype, 'getSomethingB').mockImplementation(mockedGetSomethingB);    //providing mocked string in getSomethingB for each instance of Class A
})

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
