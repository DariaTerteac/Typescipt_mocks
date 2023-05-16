import { InnerClass } from "../src/inner-class";
import { main } from "../src/main";

InnerClass.prototype.acceptLambda = jest.fn().mockImplementation(() => "mocked string");

describe("check MyClass with simple lambda function", () => {
    it("should call mocked lambda function", () => {

      //Act
      const myAttribute = main(); //calling mocked version of acceptLambda
  
      //Assert
      expect(myAttribute).toBe("mocked string"); //check if mocked version was really called
      jest.clearAllMocks();
    });
  });