/* EXERCISE 3 - Classes
 * 3.a
 * An incomplete House class is defined below. The House class should accept the following parameters:
 *  - windows
 *  - colour (must default to white - you can use ES6 default parameters syntax)
 *  - number of rooms
 *  - location
 *
 * 3.b
 * A method has already been created which computes the energy cost based on the number of windows
 *
 * The House class should also have a method which computes the price of the house based on the location and number of rooms
 *  - The price should have a base value of 50,000GBP, with an addition of 10,000GBP for each room it has (if it's a
 *  studio flat, the room number should be 0)
 *  - If the house is based in London, the value of the house should increase by 80%
 *
 * 3.c
 * This is where you flex your Googling skills! The House class should also implement a static method. Use Google
 * to research what static methods are and implement a static method for the House class which calculates the number of
 * square feet into square meters
 *
 * 3.d
 * Using your newly created class
 *  - Instantiate (hint: new House())a brown house with 3 windows and 2 bedrooms that is based in Woking - ok
 *  - Instantiate another blue house with 5 windwos and 2 bedrooms that is based in London - ok
 *  - Return and compare the price of the two houses - ok
 *  - Return and compare the energy bill of the two houses
 *  - Return how many square meters are in 950 square feet
 */

class House {
  constructor(windows, colour = "white", numOfRooms, location) {
    this.windows = windows;
    this.colour = colour;
    this.numOfRooms = numOfRooms;
    this.location = location;
  }
  getPrice() {
    let startPrice = 50000;
    let priceByNumOfRooms = this.numOfRooms * 10000;
    let totalPrice = priceByNumOfRooms + startPrice;
    if (this.location === "London") {
      totalPrice = totalPrice * 1.8;
    }
    return totalPrice;
  }

  monthlyEnergyBill(windows) {
    let base = 40; // base energy bill without windows
    let multiplier = 1.2; // energy bill expected to go up 20% for each additional window
    let total = base + windows * multiplier;
    return total;
  }

  static calculateSquareFeet(squareFeet) {
    const squareMeters = squareFeet * 0.092903;
    return squareMeters;
  }
}

function comparePrices(house1, house2) {
  if (house1.getPrice() > house2.getPrice()) {
    return `${house1.colour} house in ${house1.location} is more expensive`;
  } else if (house2.getPrice() > house1.getPrice()) {
    return `${house2.colour} house in ${house2.location} is more expensive`;
  } else {
    return "They are the same price";
  }
}
function compareEnergyBills(house1, house2) {
  if (
    house1.monthlyEnergyBill(house1.windows) >
    house2.monthlyEnergyBill(house2.windows)
  ) {
    return `${house1.colour} house  in ${
      house1.location
    } energy bills is the highest and has a cost of ${house1.monthlyEnergyBill(
      house1.window
    )} pounds`;
  }
  else if (
    house2.monthlyEnergyBill(house2.windows) >
    house1.monthlyEnergyBill(house1.windows)
  ) {
    return `${house2.colour} house in ${
      house2.location
    } energy bills is the highest and has a cost of ${house2.monthlyEnergyBill(
      house2.windows
    )} pounds`;
  } else {
    return "same";
  }
}

const brownHouse = new House(3, "Brown", 6, "Woking");
const blueHouse = new House(5, "Blue", 1, "London");
const calculateSquareFeet = House.calculateSquareFeet(950);

console.log(comparePrices(brownHouse, blueHouse));
console.log(compareEnergyBills(brownHouse, blueHouse));
console.log(calculateSquareFeet);
