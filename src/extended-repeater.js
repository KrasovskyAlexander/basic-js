const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  return str+((options.addition+options.additionSeparator).repeat(options.additionRepeatTimes)).repeat(options.repeatTimes);
};
  