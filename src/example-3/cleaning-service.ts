import House from "./house";

export default class CleaningService {
    public static makeOrder(house: House, service?: Service) {
        switch (service) {
            case Service.CleanHouse:
                this.cleanHouse(house);
                break;
            case Service.CleanKitchen:
                this.cleanKitchen(house);
                break;
            case Service.CleanBathroom:
                this.cleanBathroom(house);
                break;
            case Service.CleanSofa:
                this.cleanSofa(house);
                break;
            default:
                console.log("You forgot to choose the service. Please try again!");
                break;
        }

        console.log(`Please ${house.owner.name} pay for service`);
    }
    
    public static cleanHouse(house: House) {
        this.cleanKitchen(house);
        this.cleanBathroom(house);
        this.cleanSofa(house);
        console.log("The house is clean!");
    }

    public static cleanSofa(house: House) {
        console.log(`The sofa at ${house.address} is clean!`);
    }

    public static cleanBathroom(house: House) {
        console.log(`The bathroom at ${house.address} is clean!`);
    }

    public static cleanKitchen(house: House) {
        console.log(`The kitchen at ${house.address} is clean!`);
    }
}
export enum Service {
    CleanHouse,
    CleanSofa,
    CleanBathroom,
    CleanKitchen
}