import BirthdayService from "../src/example-2/birthday-service";
import { Person } from "../src/example-2/person";
import { PersonBirthdayTestData } from "../src/test-data/data-for-tests";

describe('birthday tests', () => {
    //Arrange
    const personTestdata: PersonBirthdayTestData[] = [
      { name: 'John', birthday: new Date(2000, 11, 3), resultString: 'Waiting for birthday..' },
      { name: 'Kate', birthday: new Date(), resultString: 'Happy birthday Kate' },
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
      });
    })
  });