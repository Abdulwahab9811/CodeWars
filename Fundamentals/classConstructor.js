//class constructor using 2 property name and deppartment
class Surgeon {
    constructor(name, department) {
      this.name = name;
      this.department = department;
      this._remainingVacationDays = 20;
    }

    get name() {
      return this._name;
    }
    
    get department() {
      return this._department;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
//     create a method called takeVacationDays that accepts one argument named daysOff.
// Inside of the method, subtract daysOff from the number saved to _remainingVacationDays. Set _remainingVacationDays to the result.
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }
  
  
  //create class instances. An instance is an object that contains the property names and methods of a class, but with unique property values. 
  const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
  const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');
//Calculating is remaining vacations
  console.log(surgeonRomero.name)
  surgeonRomero.takeVacationDays(3)

  console.log(surgeonRomero.remainingVacationDays)


  '*****************************************************'


  //Parent Classe that takes in 2 "SubClasses"

  class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }

    static generatePassword() {
      return Math.floor(Math.random() * 10000); // Generate a random integer between 0 and 10,000;
    }
    get name(){
      return this._name;
    }
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff
    }
  }
  
  class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
  get certifications() {
    return this._certifications
  }

  addCertification(newCertification) {
    this._certifications.push(newCertification);
   }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

nurseOlynyk.addCertification('Genetics')

console.log(nurseOlynyk.certifications);;


















//CLASS CONSTRUCTOR STATIC METHODE FOR randomBorough() for apartement or rentalunit

class RentalUnit {
  constructor(address, costPerYear) {
    this._address = address;
    this._costPerYear = costPerYear;
  }

  get address() {
    return this._address;
  }

  get costPerYear() {
    return this._costPerYear;
  }

  calculateMonthly() {
    return this.costPerYear / 12; 
  }
}

class Apartment extends RentalUnit {
  constructor(address, costPerYear, numberOfBedrooms) {
    super(address, costPerYear);
    this._numberOfBedrooms = numberOfBedrooms;
  }

  get numberOfBedrooms() {
    return this._numberOfBedrooms;
  }

  static randomBorough() {
    const myBoroughs = ['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island'];
    return myBoroughs[Math.floor(Math.random() * 5)];
  }
}

const myApartment = new Apartment('1234 W 54th', 22000, 3);


console.log(Apartment.randomBorough());

console.log(RentalUnit.randomBorough());

////////////////////////////////////////////////////////



// Parent class (Super class)
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Child class (Subclass) inherits from Animal
class Dog extends Animal {
  constructor(name, breed) {
    // super() calls the parent class's constructor
    super(name);  // Calls Animal's constructor to set the 'name' property
    this.breed = breed; // Additional property specific to Dog
  }

  // Overriding the speak method from the parent class
  speak() {
    // super.speak() calls the parent class's speak method
    super.speak();  // Calls the Animal's speak method
    console.log(`${this.name} is a ${this.breed} and barks.`);
  }
}

// Create an instance of the Dog class
const myDog = new Dog("Buddy", "Golden Retriever");
myDog.speak();
// Outputs:
// Buddy makes a sound.
// Buddy is a Golden Retriever and barks.