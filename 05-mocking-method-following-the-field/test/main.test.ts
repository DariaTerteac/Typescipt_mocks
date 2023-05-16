import { main } from "../src/main";
import { InnerClass } from "../src/inner-class";

beforeEach(() => {
  jest.clearAllMocks();
});

const mockedAcceptLambda = jest.fn(() => "mocked string");                      //lambda replacement
jest
  .spyOn(InnerClass.prototype, "acceptLambda")
  .mockImplementation(mockedAcceptLambda);           //mocking each object of MyClass

describe("check MyClass with simple lambda function", () => {
  it("should call mocked lambda function", () => {

    //Act
    const myAttribute = main();                          //calling mocked version of acceptLambda

    //Assert
    expect(myAttribute).toBe("mocked string");           //check if mocked version was really called
  });
});
