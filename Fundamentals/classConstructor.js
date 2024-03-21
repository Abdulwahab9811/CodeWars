//class constructor using 2 property name and deppartment
class Surgeon {
    constructor(name, department) {
      this.name = name;
      this.department = department;
    }
  }
  
  //create class instances. An instance is an object that contains the property names and methods of a class, but with unique property values. 
  const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
  const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');