describe("Intro to doing TDD in javascript", function() {
  var calculator = require("../calculator/calcengine");

  it("should add two numbers together", function() {
    expect(calculator.addTwoNumbers(3, 2)).toEqual(5);
  });

  it("should subtract two numbers together", function() {
    expect(calculator.subtractTwoNumbers(3, 2)).toEqual(1);
  });

  it("should divide two numbers together", function() {
    expect(calculator.divideTwoNumbers(6, 2)).toEqual(3);
  });

  it("should multiply two numbers together", function() {
    expect(calculator.multiplyTwoNumbers(3, 2)).toEqual(6);
  });

  it("should power numbers", function() {
    expect(calculator.powerNumber(3, 2)).toEqual(9);
  });

  it("should root numbers", function() {
    expect(calculator.rootNumber(9)).toEqual(3);
  });

  it("should calculate BMI with metric values", function() {
    expect(calculator.metricBMI(80, 180)).toEqual('24.69');
  });

  it("should calculate BMI with imperial values", function() {
    expect(calculator.imperialBMI(220, 70)).toEqual('31.56');
  });

  it("should calculate duration of trip", function() {
    expect(calculator.tripDuration(100, 60)).toEqual('1.67');
  });

  it("should calculate price for the trip", function() {
    expect(calculator.tripPrice(100, 60, 10, 60)).toEqual('16.67');
  });

})
