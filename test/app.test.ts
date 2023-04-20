import sumAndIncreaseResultOnTwo from "../src/app";
import { summ } from "../src/app";
import * as sumModule from "../src/app";
import SummTestData, { PersonBirthdayTestData } from "../src/dataForTests"
import BirthdayService from "../src/person/birthdayService"
import { Person } from "../src/person/person";

describe('summ', () => {
  //Arrange
  const testData: SummTestData[] = [
    { x: 1, y: 2, expectedResult: 3 },
    { x: -2, y: 2, expectedResult: 0 },
    { x: 3, y: 2, expectedResult: 5 },
    { x: 4, y: 2, expectedResult: 6 },
    { x: 5, y: 2, expectedResult: 7 }
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

describe('birthday tests', () => {
  //Arrange
  const personTestdata: PersonBirthdayTestData[] = [
    { name: 'John', birthday: new Date(2000, 11, 3), resultString: 'Waiting for birthday..' },
    { name: 'Kate', birthday: new Date(1987, 3, 20), resultString: 'Happy birthday Kate' },
    { name: 'Mary', birthday: new Date(2005, 3, 20), resultString: 'Happy birthday Mary' }
  ];

  jest.spyOn(BirthdayService, 'printMessage');

  personTestdata.forEach((personTestdata) => {
    it(`should call printMessage with ${personTestdata.resultString}`, () => {
      const person: Person = {
        name: personTestdata.name,
        birthDay: personTestdata.birthday
      };
      //Act
      BirthdayService.checkBirthday(person);
      //Assert
      expect(BirthdayService.printMessage).toHaveBeenCalledWith(personTestdata.resultString);
    })
  })
})

describe('test increase the result on two', () => {
  //Arrange
  const testData: SummTestData[] = [
    { x: 1, y: 2, expectedResult: 5 },
    { x: -2, y: 2, expectedResult: 2 },
    { x: 3, y: 2, expectedResult: 7 },
    { x: 4, y: 2, expectedResult: 8 },
    { x: 5, y: 2, expectedResult: 9 }
  ];

  jest.spyOn(sumModule, 'summ');

  testData.forEach((testData) => {
    it(`should summ two numbers ${testData.x} and ${testData.y} correctly and increase on two with expected result ${testData.expectedResult}`, () => {
      //Act
      const result = sumAndIncreaseResultOnTwo(testData.x, testData.y);

      //Assert
      expect(summ).toHaveBeenCalledWith(testData.x, testData.y);
      expect(result).toBe(testData.expectedResult);
    });
  })
});