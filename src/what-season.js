const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined) return 'Unable to determine the time of year!';
  if(date instanceof Date
    && Object.getOwnPropertyNames(date).length == 0) {
    if(date.getMonth()>1&&date.getMonth()<5) {
      return 'spring';
    }else if(date.getMonth()>4&&date.getMonth()<8){
      return 'summer';
    }else if(date.getMonth()>7&&date.getMonth()<11){
      return 'autumn';
    }else{
      return 'winter';
    }
  }
  else{
    throw new Error();
  }
};
