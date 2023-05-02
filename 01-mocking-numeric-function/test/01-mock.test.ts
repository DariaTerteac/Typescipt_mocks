import functionB from "../src/main";
import SummTestData from "../src/test-data/data-for-tests";

describe(`summ two number and add 2`, () => {
  //Arrange
  const testData: SummTestData[] = [
    { x: 1, y: 2, expectedResult: 5 },
    { x: -2, y: 2, expectedResult: 2 }
  ]

  testData.forEach((testData) => {

    const sumMock = jest.fn((x: number, y: number) => x + y);

    it(`should summ two number ${testData.x} and ${testData.y} and plus 2 with correct ${testData.expectedResult}`, () => {

      //Act
      const result = functionB(testData.x, testData.y);

      //Assert
      expect(sumMock(testData.x, testData.y)).toBe(testData.expectedResult - 2);
      expect(sumMock).toHaveBeenCalledWith(testData.x, testData.y);
      expect(result).toBe(testData.expectedResult);
    });
  })
});