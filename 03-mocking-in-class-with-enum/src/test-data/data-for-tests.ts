import { Service } from "../main";

export interface CleaningServiceTestData {
    service: Service;
    numberOfCallsForBathroom: number;
    numberOfCallsForKitchen: number;
    numberOfCallsForSofa: number;
}