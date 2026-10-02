// Q1

function checkPassword(password) {
    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        } 
        else if (char >= 'a' && char <= 'z') {
            hasLowercase = true;
        } 
        else if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
    }

    if (password.length >= 8 && hasUppercase && hasLowercase && hasNumber) {
        return "Strong Password";
    } else {
        return "Weak Password";
    }
}

// Testing
console.log(checkPassword("Hello123")); 
console.log(checkPassword("hello123")); 
console.log(checkPassword("HELLO123")); 
console.log(checkPassword("Hi123"));   


// Q2 

let weight = Number(prompt("Enter package weight (kg):"));
let distance = Number(prompt("Enter distance (km):"));
let value = Number(prompt("Enter package value:"));

let weather = prompt("Enter weather (normal, rain, storm):").toLowerCase();
let road = prompt("Enter road condition (good, bad):").toLowerCase();
let deliveryType = prompt("Enter delivery type (normal, express):").toLowerCase();

let failedAttempts = Number(prompt("Enter number of previous failed attempts:"));
let customer = prompt("Enter customer priority (normal, vip):").toLowerCase();

// Delivery Cost
let cost = 200;

cost = cost + (distance * 20);

if (weight > 5) {
    cost = cost + ((weight - 5) * 100);
}

if (deliveryType === "express") {
    cost = cost + 500;
}

// Risk Score
let risk = 0;

// Weather
if (weather === "rain") {
    risk = risk + 20;
}
else if (weather === "storm") {
    risk = risk + 40;
}

// Road Condition
if (road === "bad") {
    risk = risk + 25;
}

// Package Value
if (value > 100000) {
    risk = risk + 30;
}

// Failed Attempts
risk = risk + (failedAttempts * 10);

// Customer Priority
if (customer === "vip") {
    risk = risk - 15;
}

// Distance
if (distance > 100) {
    risk = risk + 20;
}

// Delivery Priority
let priority = "Normal Priority";

if (customer === "vip" && value > 100000) {
    priority = "VIP Priority";
}

// Final Decision
let decision;

if (risk <= 30) {
    decision = "Safe Delivery";
}
else if (risk <= 60) {
    decision = "Careful Delivery";
}
else {
    decision = "High Risk Delivery";
}

// Output
console.log("Delivery Cost: " + cost);
console.log("Risk Score: " + risk);
console.log("Delivery Priority: " + priority);
console.log("Final Delivery Decision: " + decision);


// Q3

// Taking inputs
let name = prompt("Enter customer name:");
let tickets = Number(prompt("Enter number of tickets:"));
let price = Number(prompt("Enter ticket price:"));
let customerType = prompt("Enter customer type (normal, student, vip):").toLowerCase();

// Formatting customer name
name = name.trim().toUpperCase();

// Calculating total ticket cost using loop
let total = 0;

for (let i = 1; i <= tickets; i++) {
    total = total + price;
}

// Arrow function to calculate discount
let calculateDiscount = (total, customerType, tickets) => {
    let discount = 0;

    if (customerType === "student") {
        discount = total * 0.10;
    }
    else if (customerType === "vip") {
        discount = total * 0.20;
    }
    else {
        discount = 0;
    }

    // Extra discount for buying 5 or more tickets
    if (tickets >= 5) {
        discount = discount + (total * 0.05);
    }

    return discount;
};

// Calculating discount
let discount = calculateDiscount(total, customerType, tickets);

// Calculating final bill
let finalBill = total - discount;

// Rounding final bill
finalBill = Math.round(finalBill);

// Displaying output
console.log("----- CINEMA TICKET BILL -----");
console.log("Customer Name: " + name);
console.log("Total Tickets: " + tickets);
console.log("Total Cost: " + total);
console.log("Discount: " + discount);
console.log("Final Payable Amount: " + finalBill);

// Q4


function analyzeScore(score) {

    // Convert score to string
    let scoreString = score.toString();

    // Check number of digits
    let digits = scoreString.length;

    // Calculate sum of digits using loop
    let sum = 0;

    for (let i = 0; i < scoreString.length; i++) {
        sum = sum + Number(scoreString[i]);
    }

    // Calculate square root
    let squareRoot = Math.sqrt(score);

    console.log("Number of Digits: " + digits);
    console.log("Sum of Digits: " + sum);
    console.log("Square Root: " + squareRoot);

    // Check score using conditions
    if (score === 100) {
        return "Perfect Score";
    }
    else if (score >= 80) {
        return "Excellent Score";
    }
    else if (score >= 50) {
        return "Good Score";
    }
    else {
        return "Needs Improvement";
    }
}

// Testing
console.log(analyzeScore(100));
console.log(analyzeScore(85));
console.log(analyzeScore(65));
console.log(analyzeScore(30));

// Q5

function checkMobileNumber(number) {

    // Convert number to string
    let mobile = number.toString();

    // Check length
    let isValid = true;

    // Check whether all characters are numbers
    for (let i = 0; i < mobile.length; i++) {
        if (mobile[i] < '0' || mobile[i] > '9') {
            isValid = false;
        }
    }

    // Check length and starting digits
    if (mobile.length === 11 && mobile.startsWith("03") && isValid) {
        return "Valid Mobile Number";
    }
    else {
        return "Invalid Mobile Number";
    }
}

// Testing
console.log(checkMobileNumber("03123456789"));
console.log(checkMobileNumber("02123456789"));
console.log(checkMobileNumber("0312345678"));
console.log(checkMobileNumber("03abc456789"));


// Q6
function checkTemperature(temperature) {

    // Loop to count how many times temperature is checked
    let count = 0;

    for (let i = 1; i <= 1; i++) {
        count++;
    }

    console.log("Temperature checked " + count + " time");

    // Classify temperature
    if (temperature > 30) {
        return "Hot";
    }
    else if (temperature < 30) {
        return "Cold";
    }
    else {
        return "Normal";
    }
}

// Testing
console.log(checkTemperature(35));
console.log(checkTemperature(25));
console.log(checkTemperature(30));

// Q7
function checkSpeed(speed) {

    // Loop to count how many times speed is checked
    let count = 0;

    for (let i = 1; i <= 1; i++) {
        count++;
    }

    console.log("Speed checked " + count + " time");

    // Classify speed
    if (speed > 60) {
        return "Fast";
    }
    else if (speed < 60) {
        return "Slow";
    }
    else {
        return "Normal";
    }
}

// Testing
console.log(checkSpeed(80));
console.log(checkSpeed(40));
console.log(checkSpeed(60));

// Q8

function checkStudentID(id) {

    // Convert ID to string
    let studentID = id.toString();

    // Check length
    let isValid = true;

    // Check if ID starts with "ST"
    if (!studentID.startsWith("ST")) {
        isValid = false;
    }

    // Check characters after "ST"
    for (let i = 2; i < studentID.length; i++) {
        if (studentID[i] < '0' || studentID[i] > '9') {
            isValid = false;
        }
    }

    // Check length and format
    if (studentID.length === 7 && isValid) {
        return "Valid Student ID";
    }
    else {
        return "Invalid Student ID";
    }
}

// Testing
console.log(checkStudentID("ST12345"));
console.log(checkStudentID("ST1234"));
console.log(checkStudentID("AB12345"));
console.log(checkStudentID("ST12A45"));

// Q9
function calculateResult(marks1, marks2, marks3) {

    // Total marks
    let total = marks1 + marks2 + marks3;

    // Percentage
    let percentage = (total / 300) * 100;

    // Grade
    if (percentage >= 80) {
        return "A Grade";
    }
    else if (percentage >= 70) {
        return "B Grade";
    }
    else if (percentage >= 60) {
        return "C Grade";
    }
    else {
        return "Fail";
    }
}

// Testing
console.log(calculateResult(85, 90, 80));
console.log(calculateResult(75, 70, 72));
console.log(calculateResult(60, 65, 70));
console.log(calculateResult(40, 50, 45));

// Q10
function calculateGrade(marks) {

    if (marks >= 80 && marks <= 100) {
        return "A";
    }
    else if (marks >= 70) {
        return "B";
    }
    else if (marks >= 60) {
        return "C";
    }
    else if (marks >= 50) {
        return "D";
    }
    else {
        return "F";
    }
}

// Testing
console.log(calculateGrade(85)); // A
console.log(calculateGrade(75)); // B
console.log(calculateGrade(65)); // C
console.log(calculateGrade(55)); // D
console.log(calculateGrade(40)); // F