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