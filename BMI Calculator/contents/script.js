var wt = document.getElementById("weight");
wt.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});
var ht = document.getElementById("height");
ht.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  }
});

function bmi() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;

  if (weight <= 0 || height <= 0) {
    document.getElementById("ans").innerHTML = "Please enter valid values";
    return;
  }

  num = (weight / height / height) * 10000;
  num = num.toFixed(1);

  if (num <= 18.4) {
    measure = `Your BMI is ${num} which means you are Underweight`;
  } else if (num >= 18.5 && num <= 24.9) {
    measure = `Your BMI is ${num} which means You are Normal`;
  } else if (num >= 25 && num <= 29.9) {
    measure = `Your BMI is ${num} which means You are Overweight`;
  } else {
    measure = `Your BMI is ${num} which means You are Obese`;
  }

  document.getElementById("ans").innerHTML = measure;
  return;
}
