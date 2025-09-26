class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name}: sound`);
  }

  newFeature() {
    console.log('newFeature')
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    console.log(`${this.name}: bark`);
  }
}
