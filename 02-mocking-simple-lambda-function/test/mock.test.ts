import { MyClass, main } from "../src/main";

MyClass.prototype.acceptLambda = jest.fn().mockImplementationOnce((str: (str: string) => string) => "mocked string");

describe('test ', () => {
  it('test', () => {
    //Act
    const result = main();

    //Assert
    expect(result).toBe("mocked string")
  });
});
