while (1) {
  var calculator_type_input = prompt("Welcome to the handy calculator press: (1)basic calculator, (2)BMI calculator, (3)Trip Calculator");

  switch (calculator_type_input) {
    case "1":
      Calculator();
      break;
    case "2":
      BMI();
      break;
    case "3":
      TripCalculator();
      break;
    default:

  }
}

function TripCalculator() {
  var distance_input = parseFloat(prompt("Enter your distance in Miles: "));
  var fuel_efficiency_input = parseFloat(prompt("Enter your fuel efficiency in MPG: "));
  var cost_per_galon_input = parseFloat(prompt("Enter your cost per galon: "));
  var speed_mph_input = parseFloat(prompt("Enter your speed in MPH: "));

  var duration = tripDuration(distance_input, speed_mph_input);
  var total_price = tripPrice(distance_input, fuel_efficiency_input, cost_per_galon_input, speed_mph_input);

  alert("Your trip will take " + duration + " hours and cost £" + total_price);
}

function BMI() {
  var metric_or_imperial_input = prompt("(1)Metric or (2)Imperial");

  switch (metric_or_imperial_input) {
    case "1":
      var first_number_input = parseFloat(prompt("Input your weight in kilograms: "));
      var second_number_input = parseFloat(prompt("Input your height in centimeters: "));
      alert("Your BMI is: " + (
      metricBMI(first_number_input, second_number_input)));
      break;
    case "2":
      var first_number_input = parseFloat(prompt("Input your weight in pounds: "));
      var second_number_input = parseFloat(prompt("Input your height in inches: "));
      alert("Your BMI is: " + (
      imperialBMI(first_number_input, second_number_input)));
      break;
    default:
  }
}

function Calculator() {
  var first_number_input = parseFloat(prompt("Enter your first number: "));
  var operation_input = prompt("Enter your operation for: " + first_number_input);
  var second_number_input = parseFloat(prompt("Enter your second number for: " + first_number_input + operation_input));

  switch (operation_input) {
    case "+":
      alert("Your answer: " + (
      addTwoNumbers(first_number_input, second_number_input)));
      break;
    case "-":
      alert("Your answer: " + (
      subtractTwoNumbers(first_number_input, second_number_input)));
      break;
    case "*":
      alert("Your answer: " + (
      multiplyTwoNumbers(first_number_input, second_number_input)));
      break;
    case "/":
      alert("Your answer: " + (
      divideTwoNumbers(first_number_input, second_number_input)));
      break;
    case "^":
      alert("Your answer: " + (
      powerNumber(first_number_input, second_number_input)));
      break;
    case "r":
      alert("Your answer: " + (
      rootNumber(first_number_input)));
      break;
    default:
      alert("Invalid input")
  }
}
