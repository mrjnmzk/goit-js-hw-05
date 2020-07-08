class Car {
    
  static getSpecs(car) {
    console.log(
      `maxSpeed = ${car.maxSpeed}, speed = ${car.speed}, isOn = ${car.isOn}, distance = ${car.distance}, price = ${car.price}`,
    );
  }
 
    /*
     * Додай статичний метод `getSpecs(car)`,
     * який приймає об'єкт-машину як параметр і виводить
     * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
     */
  
    /*
     * Конструктор отримує об'єкт налаштувань.
     *
     * Додай властивості майбутнього екземпляра класу:
     *  speed - поточна швидкість, початкова 0
     *  price - ціна автомобіля
     *  maxSpeed - максимальна швидкість
     *  isOn - заведений автомобіль, значення true або false. Спочатку false
     *  distance - загальний кілометраж, спочатку 0
     */
    constructor(obj, speed = 0, isOn = false, distance = 0) {
        this.maxSpeed = obj.maxSpeed;
        this._price = obj.price;
        this.speed = speed;
        this.isOn = isOn;
        this.distance = distance;
      }
    
      get price() {
        return this._price;
      }
    
      set price(amount) {
        this._price = Number(amount);
      }
  
    /*
     * Додай геттер і сеттер для властивості price,
     * який буде працювати з властивістю ціни автомобіля.
     */
  
    /*
     * Додай код для того, щоб завести автомобіль
     * Записує у властивість isOn значення true
     */
    turnOn() {
        this.isOn === false ? (this.isOn = true) : console.log('car is On');
    }
  
    /*
     * Додай код для того, щоб заглушити автомобіль
     * Записує у властивість isOn значення false,
     * і скидає поточну швидкість в 0
     */
    turnOff() {
        if (this.isOn === true) {
        this.isOn = false;
        this.speed = 0;
      } else {
        console.log('car is Off');
      }
    }
  
    /*
     * Додає до властивості speed отримане значення,
     * за умови, що результуюча швидкість
     * не більше, ніж значення властивості maxSpeed
     */
    accelerate(value) {
        if (this.speed + value > this.maxSpeed) {
        this.speed = this.maxSpeed;
      } else {
        this.speed += Number(value);
      }
    }
  
    /*
     * Забирає від властивості speed отримане значення,
     * за умови, що результуюча швидкість не менше нуля
     */
    decelerate(value) {
        if (this.speed - value < 0) {
        this.speed = 0;
      } else {
        this.speed -= Number(value);
      }
    }
  
    /*
     * Додає в поле distance кілометраж (hours * speed),
     * але тільки в тому випадку, якщо машина заведена!
     */
    drive(hours) {
        if (this.isOn) {
            this.distance += Number(hours) * this.speed;
          }
        }
    }
  
  
  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  
  console.log(mustang.price); // 2000
  mustang.price = 4000;
  console.log(mustang.price); // 4000