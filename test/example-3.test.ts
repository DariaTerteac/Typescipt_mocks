import CleaningService, { Service } from "../src/example-3/cleaning-service";
import House from "../src/example-3/house";
import { CleaningServiceTestData } from "../src/test-data/data-for-tests";

describe('cleaning service order', () => {
    //Arrange
    const cleaningTestData: CleaningServiceTestData[] = [
        { service: Service.CleanBathroom, numberOfCallsForBathroom:1, numberOfCallsForKitchen:0, numberOfCallsForSofa:0 },
        { service: Service.CleanKitchen, numberOfCallsForBathroom:0, numberOfCallsForKitchen:1, numberOfCallsForSofa:0 },
        { service: Service.CleanHouse, numberOfCallsForBathroom:1, numberOfCallsForKitchen:1, numberOfCallsForSofa:1 },
        { service: Service.CleanSofa, numberOfCallsForBathroom:0, numberOfCallsForKitchen:0, numberOfCallsForSofa:1 }
    ];

    jest.spyOn(CleaningService, 'cleanBathroom');
    jest.spyOn(CleaningService, 'cleanKitchen');
    jest.spyOn(CleaningService, 'cleanSofa');

    cleaningTestData.forEach((cleaningTestData) => {
       afterEach(() => {
            jest.clearAllMocks();
        })
        
        it(`clean house`, () => {
            const house: House = {
                owner: {
                    name: "Nick"
                },
                address: "Your str, 1"
            };
            //Act
            CleaningService.makeOrder(house, cleaningTestData.service);
            //Assert
            expect(CleaningService.cleanBathroom).toHaveBeenCalledTimes(cleaningTestData.numberOfCallsForBathroom);
            expect(CleaningService.cleanKitchen).toHaveBeenCalledTimes(cleaningTestData.numberOfCallsForKitchen);
            expect(CleaningService.cleanSofa).toHaveBeenCalledTimes(cleaningTestData.numberOfCallsForSofa);
        });
    })
});