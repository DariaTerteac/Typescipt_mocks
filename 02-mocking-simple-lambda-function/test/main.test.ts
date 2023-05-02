import { MyClass, main } from "../src/main";

beforeAll(() => {
  const mockedAcceptLambda = jest.fn((str: (str: string) => string) => "mocked string");   //lambda replacement
  jest.spyOn(MyClass.prototype, 'acceptLambda').mockImplementation(mockedAcceptLambda);    //mocking each object of MyClass
})

describe('check MyClass', () => {
  it('should call lambda func', () => {
    //Act
    const myAttribute = main();    //calling mocked version of acceptLambda

    //Assert
    expect(myAttribute).toBe("mocked string");   //check if mocked version was really called
  })
});
