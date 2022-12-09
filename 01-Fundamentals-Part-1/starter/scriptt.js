
//variable
/* best practice its better to always use const by default and let when i am really sure the variable that needs to change at somepoint in my code

let age = 30;
age = 31;
const birthYear = 1991;

const now = 2022;
const ageAisha = now - 2000;
const ageKawsar = now - 2005;
console.log("Aish's age is :" +  " "+ ageAisha + " " + "Kawsars age is : " + " " +ageKawsar);

const firstName = 'Aisha';
const lastName = 'Hassan';

console.log(firstName + ' ' + lastName);

let x = 10 + 5;
x+=10;
x++;
console.log(x);

//Comparison operators

console.log(ageAisha > ageKawsar);

console.log(now - 1991 > now - 2018);
const averageAge = (ageAisha + ageKawsar )/2;
console.log(averageAge)*/ 

//Challenge
/*Code challenge 1*
*Mark and John are trying to compare their MBI (Body mass idex), which is calculated using the formular:
BMI = mass / height ** 2 = mass / (height * height)
(mass in kg and height in meter)

1.Store Mark's and John's mass and height in variables
2 . Calculate both thier BMIs using the formular ( you can even implement both versions)
3 . Create a boolean variable  'markHeigherBMI' containing information about  whether mark has a higher BMI than john.

TEST DATA 1: Marks wights 78 kg and is 1.69m tall.
         john weights 92 kg and is 1.95 m tall

TEST DATA 2 : Marks weights 95 kg and is 1.88 m  tall.
            john weights 85 kg and is 1.76 m tall


*/
/*Challenge solution

const markHeight = 1.69 , marksWeight = 87; // marks height and weight
const johnHeight = 1.95 , johnWeight = 92; //johns height and weight
const markBmi = 87 / 1.6 * 2; 
const johnBmi = 92 / 1.95 *2;
//this is a boolean variabel what makes a boolean is the comparison operator//
const markHeigherBMI = markBmi > johnBmi;
console.log("Mark BMI is :" + markBmi + " " + 'And john BMI is : ' + johnBmi)
console.log(markHeigherBMI)


if(markBmi > johnBmi){
    console.log( "Mark has a heigher MBI ");

}else{
    console.log("john's BMI :"+ johnBmi  + "is heigher than " + "Marks MBI :" + markBmi);

} */


/* Strings and Template Literals 
const firstName = "Aisha";
const job = "Student";
const birthYear = 2000;
const year = 2022;

const Aisha = "I'm " + firstName + ', a ' + (year - birthYear) + " years old " + job + '!';
console.log(Aisha);

const newAisha = `I'am ${firstName},a ${year - birthYear} year old ${job}`;
console.log(newAisha);*/


/*Taking Decisions: if / else Statements*/

/* write a program wich allows a person to know if they can take their driver lesson  or not
 if the person can take the driven lesson print our "congrations you can take youre driver lesson , 
 if not tell the person how many years are left for them to take the driven lesson"

 const age = 1;
 const isoldEnought =  age >= 18;

 if (isoldEnought){
    console.log("Congrations you can book your you're driven lessons")

 } else{
    const yearsleft = 18 - age;
    console.log(`there is ${yearsleft} years left for you to take the lesson`);

 }
 let century;

 const birthYear = 1991;
 if( birthYear <= 2000){
     century = 20;
 }else{
     century = 21;
 }*/


/*Type Conversion and Coercion*

//Type Conversion 

const inputYear = '1991';
console.log(Number(inputYear),inputYear)
console.log(inputYear + 18);
console.log(Number('jonas')); //outputs Nan: Not a number
console.log(typeof NaN);
console.log(String(23) , 23);
*/
/* Type Coercion -> TYPE  Coercion happens when ever a operator is dealing with 2 values that has 2 types - js does behind the secene
console.log('I am ' + 23 + 'years old');
console.log('23' - '10' - 3 );
// falsy , 0 and less is falsy value but 1 and more are Truthy value //
 const money = 30;
 if (money){
    console.log("Don't spend it all")

 }else{
    console.log("you should get a job!");
 }


 let height ;
 if (height){
    console.log.log("YAY! Height is defined")
 }else{
    console.log("Height is UNDEFINED");
 }


 const favNum = prompt ("what's your favourite number ?");
 console.log(favNum);

 if(favNum == 23){
    console.log("cool! " + favNum + " is amazing number")
 }else if(favNum == 7){
    console.log("cool! " + favNum + " is also amazing number")


 }*/

 /*Boolean Logic -> 1.AND , OR , AND - & , NOT  

 hasDriversLicense = true;
 const hasGoodVision = true;
 const isTired = true;

 console.log(hasDriversLicense && hasGoodVision);
 console.log(hasDriversLicense || hasGoodVision);
 console.log(!hasDriversLicense);

 const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

 if (shouldDrive){
    console.log("Sara is able to drive 👍🏻");

 }else{
    console.log("Sara should'nt drive!");
 }
*/ 

/*Challenge 3

- Two gymnastics tams, Dolphins and Koals.
- they compete against each other 3 times. The winner with the highest average score wins a trophy!

1. Calculate the average score  for each team, using the test data below
2. Compare the team's average score to determine the winner of the competition, and print it to the
winner of the competition, and print it to the console.Don't forgot that there can be a draw, so test for that as well (draw means they have same average score)

3. BONUS 1: Include a requirement for a minimum score of 100. with this rule, a team only wins if it has a higher score than the other team, 
and the same time a score of at least 100 points.
HINT : use logical operator to test for minimum score, as well multiple else-if blocks

4 . BONUS 2 : Minimum score also applies to a draw! so a draw only happens when both teams have the same 
score and both have a score greater or greater or equal 100 points. otherwise, no team wins the trophy

TEST DATA : Deolphins score 96 , 108 and 89.
            Koals score 88 , 91 and 110




*/



 


