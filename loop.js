// loop and Strings
/*for(let  i =1;i <= 5;i++)
{
    console.log ("i =" ,i);
}

let sum = 0;
let n = 5;
for ( let i = 1; i <= n; i++)
{
    sum = sum + i;
} 
console.log("sum =",sum);



//Infinite loop Run ni karne
for (let i = 1; i>= 0 ; i++)
    {
        console.log ("i=",i);
    } 
    

    // While(condation) loop 
    let i = 1
    while (i <=5)
    {
        console.log ("i=", i);
        i++;
    }



// Do while loop 
let i = 1;
    do
    {
        console.log("i=",i);
        i++;
    }
    while(i <=5);


// for_of_loop use String and Array 


let str = "KaleemKayani";
let size = 0;
for (let i of str)
{
    console.log("i=",i);
    size++;
}
console.log ("String Size=", size)



//For_in_loop 
let student =
{
    name: "Kaleem Kayani",
    Roll: 51,
    Class: "Bs",
}
for (let key in student)
{
    console.log ("key=", key, "value=", student [key]);
}



// Question 1 Print even number 0 to 100
for (let i = 0 ; i <=100; i++)
{
    if (i % 2 != 0)
    {
        console.log ("i=",i);
    }
}


*/
//Question 2 
let gameNum = 25;
let userNum = prompt("Gues the number :");
while (userNum != gameNum) 
    {
    //game
   userNum = prompt(" Your Enter wrong Number.Guess again:");
}
console.log ("Congraulaion, you entered the right number");


