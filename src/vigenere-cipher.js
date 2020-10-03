const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(a = true){
    this.alphaviteArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    this.g = a;
  }

  codeChar(char){
    return char.charCodeAt(); 
  }

  



  encrypt(mes,key,decr=true) {
    if(!mes||!key){
      throw new Error();
    }
    mes = mes.toUpperCase().split('');;
    key = key.toUpperCase().split('');;
    let result = [];
    let strArr =[],keyArr = [];
    for(let i = 0;i<mes.length;i++){
      if(!this.alphaviteArr.includes(mes[i])){
        strArr.push(mes[i]);
        continue;
      }
      strArr.push(mes[i].charCodeAt())
    }
    for(let i = 0;i<key.length;i++){
      keyArr.push(key[i].charCodeAt())
    }
    let j=0;

    for(let i = 0;i<strArr.length;i++){
      if(!this.alphaviteArr.includes(mes[i])){
        result.push(mes[i]);
        continue;
      }
      if(decr){
      result.push(this.alphaviteArr[((strArr[i]+keyArr[j])%this.alphaviteArr.length)]);
      }else{
        result.push(this.alphaviteArr[((strArr[i]+this.alphaviteArr.length-keyArr[j])%this.alphaviteArr.length)]);
      }
      j++;
      if(j>=keyArr.length) j=0;
    }
    



    if(!this.g) {
      result.reverse();
    }

    return result.join('');
  }    
  decrypt(mes,key) {
    return this.encrypt(mes,key,false);
  }
}

module.exports = VigenereCipheringMachine;

let vj = new VigenereCipheringMachine();

console.log(vj.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'));



