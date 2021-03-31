
'use strict';
let userName = prompt("what\'s your name?");
console.log(userName);
let age = prompt("what\'s your age?");
alert("hi " + userName + age);
var gopher = 1;
let score = 0;






function software() {
let experience = prompt(" do i have software experience?");
experience=experience.toLowerCase();
if (experience == "yes" || experience == "y") { alert("i wish"); }
else if (experience == "no" || experience == "n") { alert("unfortunately");score++; }
else { alert(" please choose yes or no"); }
return(experience);
}
software();


function design() {
let web= prompt("do i prefer to design complex web bages?");
web=web.toLowerCase();
if (web == "yes" || web == "y") { alert("it will take time");score++; }
else if (web == "no" || web == "n") {alert ("it will not take time"); }
else { alert(" please choose yes or no"); }
return(web);
}
design();


 function money() {
 let business =prompt('does  my  business depend on these web bages?');
 business=business.toLowerCase();
 if (business == "yes" || business == "y") { alert("yes it is a business"); score++;}
 else if (business == "no" ||business== "n") {alert ("you are wrong"); }
 else { alert(" please choose yes or no"); }
 return(business);
}
 money();



 function job() {
 let pay =prompt("Do you think I am getting more than 200 jd? ");
 pay=pay.toLowerCase();
 if (pay == "yes" || pay == "y") { alert("you will git agreat job");score++; }
 else if (pay == "no" || pay== "n") {alert("iam soory to hear that"); }
 else { alert(" please choose yes or no"); }
 return(pay);
}
 job();




function help() {
let work =prompt('am i professional in my work?');
 work=work.toLowerCase();
 if (work == "yes" || work== "y") {  alert("you will get it");score++;}
 else if (work == "no" || work== "n") {alert("our students will help you"); }
 else { alert(" please choose yes or no"); }
 return(work);
}
help();



function sign(){
  let number=prompt("what is my preferred number from 1 to 10?");
  console.log(number);
  let perfer=7;
  for(let i=0;i<3;i++){
    if (number==perfer) {alert("yes you are right i really prefer it");score++; break; }
    else if (number>perfer){console.log(number);number=prompt("try again it is higher");}
    else if (number<perfer){console.log(number); number=prompt("try again it is lower");}}
   alert("it was number 7"); 
   return(number);
   }
   sign();

 







function country() {
  // let city = prompt(' what do you think my favorite country?\n Ireland " , "South Africa " ," Canada " ,"Sweden ","Romania","  Italy ","turkey ", "greece');
  // console.log(city);

  let countries = ["Ireland ", "South Africa", "Canada", "Sweden ", "Romania", "  Italy ", "turkey ", "greece "];
  for (let j = 0; j <= 6; j++) {
   let city = prompt(' what do you think my favorite country?')
  
    for (let i = 0; i < countries.length; i++) {
      if (countries[i] == city) {
        console.log(countries[i]);
        console.log(city)
        ;
        alert("correct");
        j=countries.length+2;
        alert(countries);
      

        score++;
        alert(score);
         break;
      }
      

    }
   
  }alert("nice");
}


country();




















// let userName = prompt("what\'s your name?");
// console.log(userName);
// let age = prompt("what\'s your age?");
// alert("hi " + userName + age);
// var gopher = 1;




// let score = 0;



// let experience = prompt(" do i have software experience?");
// experience = experience.toLowerCase();
// function software(experience) {
// if (experience == "yes" || experience == "y") { alert("i wish"); }
// else if (experience == "no" || experience == "n") { alert("unfortunately");score++; }
// else { alert(" please choose yes or no"); }
// return(experience);}
// software();



// let web= prompt("do i prefer to design complex web bages?");
// web=web.toLowerCase();
// function design(web) {
// if (web == "yes" || web == "y") { alert("it will take time");score++; }
// else if (web == "no" || web == "n") {alert ("it will not take time"); }
// else { alert(" please choose yes or no"); }
// return(web);}
// design();



// let business =prompt('does  my  business depend on these web bages?');
//  business=business.toLowerCase();
//  function mony(business) {
//  if (business == "yes" || business == "y") { alert("yes it is a business"); score++;}
//  else if (business == "no" ||business== "n") {alert ("you are wrong"); }
//  else { alert(" please choose yes or no"); }
//  return(business);}
//  mony();


//  let pay =prompt("Do you think I am getting more than 200 jd? ");
//  pay=pay.toLowerCase();
//  function job(pay) {
//  if (pay == "yes" || pay == "y") { alert("you will git agreat job");score++; }
//  else if (pay == "no" || pay== "n") {alert("iam soory to hear that"); }
//  else { alert(" please choose yes or no"); }return(pay);}
//  job();



// let work =prompt('am i professional in my work?');
//  work=work.toLowerCase();
//  function help(work) {
//  if (work == "yes" || work== "y") {  alert("you will get it");score++;}
//  else if (work == "no" || work== "n") {alert("our students will help you"); }
//  else { alert(" please choose yes or no"); }return(work);}
//  help();



// let number=prompt("what is my preferred number from 1 to 10?");
//  console.log(number);
// let perfer=7;
// for(let i=0;i<3;i++){
//   if (number==perfer) {alert("yes you are right i really prefer it");score++; break; }
//   else if (number>perfer){console.log(number);
//           number=prompt("try again it is higher");}
//   else if (number<perfer){console.log(number);
//     number=prompt("try again it is lower");}}

// alert("it was number 7"); 

// let userName=prompt('what\'s your name?')
//                 console.log(userName);
//                 alert('hi  ' + userName);
//                 let age=prompt('what\'s your age?')
//                 console.log(age);
//                 alert(userName    + age);


// let  ex = prompt('do i have software experience?');
//  ex=ex.toLowerCase();
// if (ex=="yes" || ex=="y") { 
//    // console.log("good");}
//    alert("you will be surprised");}
// else if (ex=="no"||ex=="n") {
//    // console.log("dont worry");} 
//    alert("dont worry");}



// let  web =prompt('do i prefer to design complex web bages?');
//  web=web.toLowerCase();
// if (web=="yes" ||web=="y") {alert("it will take time");}
//    // console.log("it will take time");}
// else if (web=="no"||web=="n") {alert ("it will not take time");}
//     //console.log("it will not take time");} 


// let business =prompt('does  my  business depend on these web bages?');
//  business=business.toLowerCase();
// if (business=="yes" ||business=="y") {
//     alert("yes it is a business");}
//    // console.log("yes it is a business");}
// else if (business=="no"||business=="n") { alert ("you are wrong");} 
//     //console.log("you are wrong");} 


// let pay =prompt("Do you think I am getting more than 200 jd? ");
// pay=pay.toLowerCase();
// if (pay=="yes" ||pay=="y") {alert("you will git agreat job");}
//     //console.log("you will git agreat job");}
// else if (pay=="no"||pay=="n") {alert ("iam soory to hear that");}
//     //console.log("iam soory to hear that");} 


// let work =prompt('am i professional in my work?');
//  work=work.toLowerCase();
// if (work=="yes" ||work=="y") { // console.log("you will get it");}
//     alert("you will get it");}

// else if (work=="no"||work=="n") { alert("our students will help you")};
//     //console.log("our students will help you");} 





// let num = prompt('what is my preferred number from 1 to 10?')
// console.log(num);
// let nop=7;

// for(let i=0;i<5; i++){
//     if (num==nop) {
//         alert("you are perfect"); 

//        // score++;
//         break;}

//     else if (num>nop) { console.log(num); 
//         num=prompt ("you are too high")
//       }

//     else if (num<nop){ console.log(num);
//       num=  prompt(" try again");
//     }}
//     alert("it was number 7"); 








    // let fav= ["autcade", "proken","html","css","etabs"]
    // console.log(fav);

    // let favorite =prompt("my favorite computer software or language on computers? ")
    // for(let i=0;i<7; i++){
    // if (favorite ==fav) { alert("correct");
    //     break;
    // }
    // else if(favorite !==fav){console.log("favorite")
    //    favorite= prompt(" try again ")}
    // }

    //    alert(fav) ;






// // // while(num!=7){ num=prompt('try again');}

// //     if(num==scoor){alert("you are perfect");
// // }

// //     else if (num!==scoor) {if (num>7) {alert("you are too high");}
// //         if (num<scoor) {alert("you are to low");




// // }}
// // console.log(num)



// // if (!(num==7)){
// //     if (num>7){ alert("you are too high");
// //             }
// //     if(num<7) {alert("you are to low")} 
// // }
// // ifelse (num==7){ alert("you are perfect");

// // } }}










//   let i=0;
//   let city= prompt(" what do you think my favorite country?") ;

//   console.log(city);

//   let countries=["Ireland " , "South Africa " ," Canada " ,"Sweden ","Romania","  Italy ","turkey ", "greece "];

//     console.log(countries[i]);

//   for(let i=0;i<5;i++){
//       if (countries[i]==city) {console.log( city);
//         alert("i wish i could live there"); score++;break; }
//       else if (city !=countries[i]){console.log( city);
//         city=prompt("try again it is wrong");}}


//          alert(countries); 
//          alert(score);























// let userName=prompt('what\'s your name?')
//                 console.log(userName);
//                 alert('hi  ' + userName);
//                 let age=prompt('what\'s your age?')
//                 console.log(age);
//                 alert(userName    + age);


// let  ex = prompt('do i have software experience?');
//  ex=ex.toLowerCase();
// if (ex=="yes" || ex=="y") { 
//    // console.log("good");}
//    alert("you will be surprised");}
// else if (ex=="no"||ex=="n") {
//    // console.log("dont worry");} 
//    alert("dont worry");}



// let  web =prompt('do i prefer to design complex web bages?');
//  web=web.toLowerCase();
// if (web=="yes" ||web=="y") {alert("it will take time");}
//    // console.log("it will take time");}
// else if (web=="no"||web=="n") {alert ("it will not take time");}
//     //console.log("it will not take time");} 


// let business =prompt('does  my  business depend on these web bages?');
//  business=business.toLowerCase();
// if (business=="yes" ||business=="y") {
//     alert("yes it is a business");}
//    // console.log("yes it is a business");}
// else if (business=="no"||business=="n") { alert ("you are wrong");} 
//     //console.log("you are wrong");} 


// let pay =prompt("Do you think I am getting more than 200 jd? ");
// pay=pay.toLowerCase();
// if (pay=="yes" ||pay=="y") {alert("you will git agreat job");}
//     //console.log("you will git agreat job");}
// else if (pay=="no"||pay=="n") {alert ("iam soory to hear that");}
//     //console.log("iam soory to hear that");} 


// let work =prompt('am i professional in my work?');
//  work=work.toLowerCase();
// if (work=="yes" ||work=="y") { // console.log("you will get it");}
//     alert("you will get it");}

// else if (work=="no"||work=="n") { alert("our students will help you")};
//     //console.log("our students will help you");} 





// let num = prompt('what is my preferred number from 1 to 10?')
// console.log(num);
// let nop=7;

// for(let i=0;i<5; i++){
//     if (num==nop) {
//         alert("you are perfect"); 

//        // score++;
//         break;}

//     else if (num>nop) { console.log(num); 
//         num=prompt ("you are too high")
//       }

//     else if (num<nop){ console.log(num);
//       num=  prompt(" try again");
//     }}
//     alert("it was number 7"); 








    // let fav= ["autcade", "proken","html","css","etabs"]
    // console.log(fav);

    // let favorite =prompt("my favorite computer software or language on computers? ")
    // for(let i=0;i<7; i++){
    // if (favorite ==fav) { alert("correct");
    //     break;
    // }
    // else if(favorite !==fav){console.log("favorite")
    //    favorite= prompt(" try again ")}
    // }

    //    alert(fav) ;






// // // while(num!=7){ num=prompt('try again');}

// //     if(num==scoor){alert("you are perfect");
// // }

// //     else if (num!==scoor) {if (num>7) {alert("you are too high");}
// //         if (num<scoor) {alert("you are to low");




// // }}
// // console.log(num)



// // if (!(num==7)){
// //     if (num>7){ alert("you are too high");
// //             }
// //     if(num<7) {alert("you are to low")} 
// // }
// // ifelse (num==7){ alert("you are perfect");

// // } }}



//    alert ("welcome "+ userName );


