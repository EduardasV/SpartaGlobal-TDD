function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

function divideTwoNumbers(num1, num2) {
  return num1 / num2;
}

function multiplyTwoNumbers(num1, num2) {
  return num1 * num2;
}

function powerNumber(num1, num2) {
  return Math.pow(num1, num2);
}

function rootNumber(num1) {
  return Math.sqrt(num1);
}

function metricBMI(num1, num2) {
  num2 /= 100;
  var result = (num1 / Math.pow(num2, 2)).toFixed(2);
  return result;
}

function imperialBMI(num1, num2) {
  var result = ((num1 * 703) / Math.pow(num2, 2)).toFixed(2);
  return result;
}

function tripDuration(num1, num2) {
  return (num1 / num2).toFixed(2);
}

function tripPrice(num1, num2, num3, num4) {

  if (num4 > 60) {
    var reducing_fuel_efficiency_input = num4 - 60;
    reducing_fuel_efficiency_input *= 2;
    num2 -= reducing_fuel_efficiency_input;
    console.log(num2);
  }
  if (num2 < 2) {
    num2 = 2;
  }
  return ((num1 / num2) * num3).toFixed(2);
}

module.exports = {
  addTwoNumbers: addTwoNumbers,
  subtractTwoNumbers: subtractTwoNumbers,
  divideTwoNumbers: divideTwoNumbers,
  multiplyTwoNumbers: multiplyTwoNumbers,
  powerNumber: powerNumber,
  rootNumber: rootNumber,
  metricBMI: metricBMI,
  imperialBMI: imperialBMI,
  tripPrice: tripPrice,
  tripDuration: tripDuration
}
