// condatin ? true : false
//let age = 18;
 //let result = age >= 18 ? console.log ("adult"): console.log ("not adult");
 // MDN Dous
 //One time ppupe up
 //alert("hello");
//let name = prompt("Hello");
//console.log (name)
/*
// Question 1
let num = prompt("Enter a Number");

if (num % 5 === 0)
{
    console.log (num, "Is a number multipel 5");
}
else
{
    console.log (num, "is a number not multipel 5");
}
*/
// Student Grade Chack
//Question 2
let score = prompt("Enter the code (0-100)");
let grade;

if (score >= 90 && score <= 100)
{

    grade = "A";
}
else if (score >= 70 && score <= 89)
{
    grade = "B";
}
else if (score >= 60 && score <= 69)
{
    grade = "C";
}
else if (score >= 50 && score <= 59)
{
    grade = "D";
}
else
{
    grade = "F";
}
console.log (grade);
