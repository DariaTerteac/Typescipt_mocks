import { Person } from "./person";

export default class BirthdayService {
    public static checkBirthday(person: Person) {
        if (person.birthDay.getDate() === new Date().getDate()) {
            const resultString = `Happy birthday ${person.name}`;
            this.printMessage(resultString);
        } else {
            this.printMessage("Waiting for birthday..");
        }
    }
    public static printMessage(message: string) {
        console.log(message);
    }
} 