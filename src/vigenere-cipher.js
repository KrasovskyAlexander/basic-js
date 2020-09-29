const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(a = true){
    this.g = a;
  }
  encrypt(mes,key) {
    if(!mes||!key){
      throw new Error();
    }
    str = str.toUpperCase();
    key = key.toUpperCase();
    let arr = [];

    for(let i = 0; i < str.length; ++i) {
     
    }

    if(!this.g) {
      arr.reverse();
    }

    return arr.join('');
  }    
  decrypt(mes,key) {
    if(!mes||!key){
      throw new Error();
    }

  }
}

module.exports = VigenereCipheringMachine;
