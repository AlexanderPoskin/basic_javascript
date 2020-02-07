function calculateBmi(weight, height) {
  const bmi = weight / (height * height);

  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25.0) {
    return "Normal";
  } else if (bmi <= 30.0) {
    return "Overweight";
  } else if (bmi > 30) {
    return "Obese";
  }
}

calculateBmi(80, 1.80);