function calculateBMI() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if (height === "" || weight === "" || height <= 0 || weight <= 0) {
        alert("⚠️ Please enter valid height and weight");
        return;
    }

    height = height / 100;
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    document.getElementById("bmiResult").innerHTML = "📊 BMI: " + bmi;

    let category = "";

    if (bmi < 18.5) category = "😟 Underweight";
    else if (bmi < 25) category = "😊 Normal weight";
    else if (bmi < 30) category = "😐 Overweight";
    else category = "⚠️ Obese";

    document.getElementById("category").innerHTML = "🏷️ Category: " + category;
}

function clearResult() {
    document.getElementById("bmiResult").innerHTML = "📊 BMI:";
    document.getElementById("category").innerHTML = "🏷️ Category:";
}
