const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let transfers = Math.pow(2,disksNumber)-1;
  return {
    turns:transfers,
    seconds: Math.floor(transfers / (turnsSpeed / 3600))
  }
  
};
