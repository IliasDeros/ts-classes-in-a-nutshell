// Basic classes
class Car {
  engineStarted: boolean

  startEngine() {
    this.engineStarted = true
    console.log('Engine started!')
  }
}
const car = new Car()
car.startEngine()



// Inheritance
class FlyingCar extends Car {
  fly() {
    if (this.engineStarted) {
      console.log('Start my engine first!')
    } else {
      console.log('I BELIEVE I CAN FLYYYYY')
    }
  }
}
const flyingCar = new FlyingCar()
flyingCar.fly()



// Composition
class Engine { 
  started: boolean

  start() {
    this.started = true
    console.log('Engine of model 23B started!')
  }
}

class ComposedTrain {
  private myEngine: Engine

  constructor() {
    this.myEngine = new Engine()
  }

  startEngine() {
    console.log('Starting train engine')
    this.myEngine.start()
  }
}

class ComposedCar {
  private myEngine: Engine

  constructor() {
    this.myEngine = new Engine()
  }

  startEngine() {
    console.log('Starting car engine')
    this.myEngine.start()
  }
}

const myCar = new ComposedCar()
const myTrain = new ComposedTrain()
myCar.startEngine()



// Polymorphism
interface IEngineStarter {
  startEngine(): void
}

const pushRemoteButton = (thing: IEngineStarter) => {
  thing.startEngine()
}

pushRemoteButton(myCar)
pushRemoteButton(myTrain)

class Another implements IEngineStarter {
  // Removing this line will raise errors. Let's understand why
  startEngine(){}
}
