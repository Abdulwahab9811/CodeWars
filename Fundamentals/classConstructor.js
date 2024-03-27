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