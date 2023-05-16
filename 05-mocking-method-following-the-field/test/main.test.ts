import { main } from "../src/main";
import { InnerClass } from "../src/inner-class";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("check MyClass with simple lambda function", () => {
  it("should call mocked lambda function", () => {
    const mockedAcceptLambda = jest.fn(
      () => "mocked string"
    );                                                   //lambda replacement
    jest
      .spyOn(InnerClass.prototype, "acceptLambda")
      .mockImplementation(mockedAcceptLambda);           //mocking each object of MyClass
    //Act
    const myAttribute = main();                          //calling mocked version of acceptLambda

    //Assert
    expect(myAttribute).toBe("mocked string");           //check if mocked version was really called
    jest.clearAllMocks();
  });
});

/*describe("check MyClass with simple lambda function", () => {
  const mockedAcceptLambda = jest.fn(
    (str: (str: string) => string) => "mocked string"
  );
  it("should call mocked lambda function", () => {
    jest.mock('../src/inner-class', () => {
      return jest.fn().mockImplementation(() => {
        return { acceptLambda: mockedAcceptLambda };
      });
    });
    jest.mock('../src/outer-class');
    const result = main();
    expect(result).toBe("mocked string");
  });
});

describe("check MyClass with simple lambda function", () => {

  it("should call mocked lambda function", () => {
    const mockedClass = {
      pubsub: {
        acceptLambda: jest.fn(),
      }
    }
    const mockedAcceptLambda = jest.fn(
      (str: (str: string) => string) => "mocked string"
    );
    jest.spyOn(mockedClass.pubsub, 'acceptLambda').mockImplementation(mockedAcceptLambda);
    const result = main();
    expect(result).toBe("mocked string");
  });
});*/
