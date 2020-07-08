class StringBuilder {
    constructor(string) {
      this._value = string;
    }
  
    get value() {
      return this._value;
    }
  
    append(smile) {
      this._value += smile;
    }
  
    prepend(smile) {
      this._value = smile + this._value;
    }
  
    pad(smile) {
      this._value = smile + this.value + smile;
    }
  }

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='