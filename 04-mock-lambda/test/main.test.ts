import { execute } from "../src/app";
import { MockedCalculator } from "../src/mocked";
import { Calculator } from "../src/main";

jest.mock('../src/main', () => {
 return {
  Calculator: MockedCalculator,
 };
});

describe('calculate result', () => {
 it('should mock Calculator with MockedCalculator', () => {
  const instance = new Calculator();
  expect(instance.calculate).toBe('Mocked');
 });
});



/*jest.mock("../src/main");
describe('calculate result', () => {
    it('should correctly call lambda function', () => {
        //Arrange    

        const mockedCalculator = Calculator as jest.MockedClass<typeof Calculator>;
        mockedCalculator.mockImplementation(() => {
            return {
                calculate: jest.fn().mockReturnValue(3)
            }
        })

        //Act
        const result = execute(2, 5);

        //Assert
        expect(result).toBe(3)

    })
})


/*describe('calculate result', () => {
    it('should correctly mult', () => {
        //Act
        const result = new Calculator().calculate(2, 5, (a, b) => a * b);

        //Assert
        expect(result).toBe(10)

    })
    it('should correctly sum', () => {
        //Act
        const result = new Calculator().calculate(2, 5, (a, b) => a + b);

        //Assert
        expect(result).toBe(7)

    })
    it('should correctly minus', () => {
        //Act
        const result = new Calculator().calculate(2, 5, (a, b) => a - b);

        //Assert
        expect(result).toBe(-3)

    })
})*/