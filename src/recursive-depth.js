const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr,masNumber =[],counter = 1) {
    masNumber.push(counter);
    arr.forEach(element => {
      if(Array.isArray(element)){
        this.calculateDepth(element,masNumber,counter+1);
      }
      
    });
    return Math.max(...masNumber);
  }
};