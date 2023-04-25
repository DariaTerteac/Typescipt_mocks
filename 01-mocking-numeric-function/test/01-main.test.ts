import { summ } from "../src/main";
import SummTestData from "../src/test-data/data-for-tests";

describe('summ of two numbers', () => {
  //Arrange
  const testData: SummTestData[] = [
    { x: 1, y: 2, expectedResult: 3 },
    { x: -2, y: 2, expectedResult: 0 },
  ]

  testData.forEach((testData) => {
    it(`should summ two numbers ${testData.x} and ${testData.y} correctly with expected result ${testData.expectedResult}`, () => {

      //Act
      const result = summ(testData.x, testData.y);

      //Assert
      expect(result).toBe(testData.expectedResult);
    });
  })
});