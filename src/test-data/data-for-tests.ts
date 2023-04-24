import { Service } from "../example-3/cleaning-service";

export default interface SummTestData {
    x: number;
    y: number;
    expectedResult: number;
}

export interface PersonBirthdayTestData {
    name: string;
    birthday: Date;
    resultString: string;
}

export interface CleaningServiceTestData {
    service: Service;
    numberOfCallsForBathroom: number;
    numberOfCallsForKitchen: number;
    numberOfCallsForSofa: number;
}