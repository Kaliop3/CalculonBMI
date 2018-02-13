const rs = require("readline-sync");
const height = rs.question("Podaj swój wzrost [cm]  ");
const mass = rs.question("\nPodaj swoją masę [kg] ");
bmi = (mass / (Math.pow(height / 100, 2))).toFixed(2);
console.log("Wskaźnik BMI dla ciebie wynosi " + bmi);
if (bmi < 16) {
    console.log("wygłodzony jesteś zrób coś z tym ");
}
else if (bmi > 16.0 && bmi < 16.99) {
    console.log("wychudzenie, czy przesadzasz z odchudzaniem ?");
}
else if (bmi > 17.0 && bmi < 18.49) {
    console.log("niedowaga");
}
else if (bmi > 18.5 && bmi < 24.99) {
    console.log("waga prawidłowa, gratki 0_0");
}
else if (bmi > 25.0 && bmi < 29.99) {
    console.log("nadwaga");
}
else if (bmi > 30.00 && bmi < 34.99) {
    console.log("I stopień otyłości");
}
else if (bmi > 35.00 && bmi < 39.99) {
    console.log(" II stopień otyłości");
}
else if (bmi > 40.00) {
    console.log(" III stopień otyłości");
}

