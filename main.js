//1-Write a program that allow to user enter number then print it
function printnum(){
    var num=prompt("enter a number");
    console.log(num);
    alert("the entered number is "+ num);
}
//2-Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
function divisbleby34(){
    var num=prompt("enter a number");
    console.log(num);
    if(num%3==0 &&num%4==0)
    alert(num+" is divisible by 3 and 4" );
    else
    alert(num+" is not divisible by 3 and 4" );
}
//3-Write a program that allows the user to insert 2 integers then print the max
function maxnum(){
    var num1=prompt("enter the first number");
    var num2=prompt("enter the second number");
    if(num1>num2)
        alert(num1 + " greater than "+num2);
    else
        alert(num2 + " greater than "+num1);
}
//4-Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
function NorP(){
    var num=prompt("enter a number");
    if(num<0)
        alert(num+" is -ve" );
    else
        alert(num+" is +ve" );
}
//5-Write a program that take 3 integers from user then print the max element and the min element.
function maxnum3(){
    var max=0;
    var min=10000000;
    for (let index = 0; index < 3; index++) {
        var num=prompt("enter a number");
        if(num<min)
            min=num;
        else if(num>max)
            max=num;
    }
    alert("max num is "+max+" and min num is "+ min);
}
//Write a program that allows the user to insert integer number then check If a number is oven or odd
function EorO(){
    var num=prompt("enter a number");
    if(num%2==0)
        alert(num+" is even" );
    else
        alert(num+" is odd" );
}
//7-Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
function isvowel(){
    var c=prompt("enter a character");
    if(c==="a"||c==="e"||c==="i"||c==="o"||c==="u")
        alert(c+" is vowel");
    else
        alert(c+" is not a vowel");
}
//8-Write a program that allows user to insert integer then print all numbers between 1 to that’s number
function printuntil(){
    var num=prompt("enter a number");
    var inp=document.getElementById("printtillnum");
    var st="";
    for (let index = 1; index <= num; index++) {
        st+= `${index} `;
    }
    inp.innerHTML=st;
    //console.log(st);
}
//9-Write a program that allows user to insert integer then print a multiplication table up to 12.
function multiples(){
    var num=prompt("enter a number");
    var mult=document.getElementById("mult");
    var st="";
    for (let index = 1; index <=12; index++) {
        if(index%num==0)   
            st+=   `${index} `; 
    }
    mult.innerHTML=st;
}
//10-Write a program that allows to user to insert number then print all even numbers between 1 to this number
function evennum(){
    var num=prompt("enter a number");
    var ev=document.getElementById("ev");
    var st="";
    for (let index = 1; index <=num; index++) {
        if(index%2==0)   
            st+=   `${index} `; 
    }
    ev.innerHTML=st;
}
//11-	Write a program that take two integers then print the power
function powerofnum(){
    var base=prompt("enter a number");
    var exponent=prompt("enter a power");
    base=Number(base);
    exponent=Number(exponent);
    console.log(base);
    console.log(exponent);
    let result = 1;
    for (let i = 1; i <= exponent; i++) {
        result *= base;
    }
    alert("the ans is "+result);
}
//12-Write a program to enter marks of five subjects and calculate total, average and percentage.
function subjects5(){
    var subj1=Number(prompt("enter subj1 grade"));
    var subj2=Number(prompt("enter subj2 grade"));
    var subj3=Number(prompt("enter subj3 grade"));
    var subj4=Number(prompt("enter subj4 grade"));
    var subj5=Number(prompt("enter subj5 grade"));
    var summ=subj1+subj2+subj3+subj4+subj5
    var avg=summ/5;
    var perc=(summ*100)/5;
    alert("total: "+summ +", avg: "+avg+ ", percentage: "+perc);
}
//13-Write a program to input month number and print number of days in that month.
function daysinmonth(){
    var month = prompt("Enter Month");
    var numberOfDays = new Date(2024, month, 0).getDate();
    alert("number of days are "+numberOfDays);
}
//14-Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade
function perc(){
    var physics = Number(prompt("Enter Physics mark"));
    var chemistry = Number(prompt("Enter Chemistry mark"));
    var biology = Number(prompt("Enter Biology mark"));
    var mathematics = Number(prompt("Enter Mathematics mark"));
    var Computer = Number(prompt("Enter Computer mark"));
    var ans =(physics + chemistry + biology + mathematics + Computer) / 5
    alert("Percentage of grades is "+ ans);
}
/*
15-	Switch
o	Write a program to print total number of days in month
o	Write a program to check whether an alphabet is vowel or consonant
o	Write a program to find maximum between two numbers
o	Write a program to check whether a number is even or odd
o	Write a program to check whether a number is positive or negative or zero
o	Write a program to create Simple Calculator
*/
function choices(){
    var choose = prompt(` 
    choose number
    1 -> Write a program to print total number of days in month
    2 -> Write a program to check whether an alphabet is vowel or consonant
    3 -> Write a program to find maximum between two numbers
    4 -> Write a program to check whether a number is even or odd
    5 -> Write a program to check whether a number is positive or negative or zero
    6 -> Write a program to create Simple Calculator
    `);
    switch (Number(choose)) {
    case 1:
        daysinmonth();
        break;
    case 2:
        isvowel();
        break;
    case 3:
        maxnum();
        break;
    case 4:
        EorO();
        break;
    case 5:
        NorP();
        break;
    case 6:
        var number1 = Number(prompt("Enter number 1"));
        var number2 = Number(prompt("Enter number 2"));
        var op = prompt("Enter operator needed");
        var ans ;
        switch (op) {
        case "+":
            ans = number1 + number2 ;
            break;
        case "-":
            ans = number1 - number2 ;
            break;
        case "*":
            ans = number1 * number2;
            break;
        case "/":
            ans = number1 / number2 ;
            break;
        }
        alert("answer: "+ans);
        break;
    }
}
//16-Print Numbers 1 to 10: Use a loop to print numbers from 1 to 10
function printnums(){
    var p=document.getElementById("printnums");
        var num=prompt("enter a number");
    var str="";
    for (let index = 1; index <=num; index++) {
        str+=`${index} `    ;    
    }
    p.innerHTML=str;
}
//17-Sum of First 10 Natural Numbers: Calculate the sum of the first 10 natural numbers using a loop
function calcsum(){
    
    var num=0;
    for (var index = 1; index <=10; index++) {
        num+=index;
    }     
    alert("Sum of First 10 Natural Numbers: "+num);
}
//18-	Print Even Numbers Between 1 and 20: Use a loop to print all even numbers between 1 and 20
function evenloop(){
    var str=""
    for (let index = 1; index <=20; index++) {
        if(index%2==0)
        str+=`${index} `;
        
    }
    var p = document.getElementById("evenloop");
    p.innerHTML=str;
}
//19-	Factorial of a Number: Calculate the factorial of a given number using a loop
function factorial() {
    var num=Number(prompt("enter a number"));
var fact=1;
    for (let index = 1; index <= num; index++) {
    fact*=index;        
    }
    alert("Factorial of "+num+" is "+fact)
}
//20-Reverse a String: Reverse a given string using a loop
function reverse(){
    var text = prompt("Enter string");
    var oldText = text;
    var textArray = text.split("");
    var ans = ""
    for (var i = 0, j = text.length - 1; i < j; i++, j--) {
    var tmp = textArray[i];
    textArray[i] = textArray[j];
    textArray[j] = tmp;
    }
    text = textArray.join("");
    alert (`old text is ${oldText} swaped to ${text}`);
}
//21-Print Elements of an Array: Print all elements of an array using a loop.
function printarr(){
    var length = prompt("Enter # of elements");
    var array = [];
    var p=document.getElementById("elementsofarr");
    for (var i = 0; i < Number(length); i++) {
        var number = prompt("Enter number " + (i + 1));
        array[i] = number;
    }
    var ans = ""
    for (var i = 0; i < array.length; i++) {
        ans+=array[i]+ " ";
    }
    p.innerHTML=ans;

}
//22-Find Maximum in an Array: Find the maximum number in an array using a loop.
function findmax(){
var length = prompt("Enter # of elements");
    var array = [];
    var max=0;
    for (var i = 0; i < Number(length); i++) {
        var number = Number(prompt("Enter number " + (i + 1)));
        if(number>max)max=number
        array[i] = number;
    }
alert("max numer is "+max);
}
//23-Print Multiplication Table: Print the multiplication table of a given number up to 10 using a loop.
function multiplesofnum(){
    var num=Number(prompt("enter a number"));
    var ans="";
    for (let index = 1; index <= 10; index++) {
        if(index%num==0)
            ans+=`${index} `;
    }
    var p=document.getElementById("multiples");
    p.innerHTML=ans;
}
//24-Count Vowels in a String: Count the number of vowels in a given string using a loop.
function isVowle(char) {
    if (char == "a" || char == "e" || char == "o" || char == "u" || char == "i")
        return true;
    return false;
}
function countvowels() {
    var string = prompt("Enter Text");
    var ans = 0;
    var output = ""
    for (var i = 0; i < string.length; i++) {
    if (isVowle(string[i])) {
        ans++;
    }
    }
    alert(`number of vowels is ${ans}`); 
}
//25-Check Prime Number: Check if a given number is prime using a loop.
function isPrime(number) {
    for (var i = number - 1; i > 1; i--) {
        if (number % i == 0) return false;
    }
    return true;
}
function checkprime(){
    var number = Number(prompt("Enter number "));
    if (isPrime(number)) alert(`${number} is prime`);
    else alert(`${number} is not prime`);
}