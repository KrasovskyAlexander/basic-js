const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, {repeatTimes = 1,separator = '+',addition, additionRepeatTimes,additionSeparator =''}) {
  str = ''+str;
  if(addition === undefined){
    addition='';
  }
  addition= ''+addition;
  if(!additionRepeatTimes){
    additionSeparator ='';
    additionRepeatTimes =1;
  }
  let additions = (addition+additionSeparator).repeat(additionRepeatTimes);
  additions = additions.slice(0,additions.length-additionSeparator.length);
  let newStr = (str+additions)+separator;
  newStr = newStr.repeat(repeatTimes);
  return newStr.slice(0,newStr.length-separator.length);
};

  