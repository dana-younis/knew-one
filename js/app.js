
'use strict';
let userName = prompt("what\'s your name?");
console.log(userName);
let age = prompt("what\'s your age?");
alert("hi " + userName + age);
var gopher = 1;
let score = 0;




function software() {
  let experience = prompt(" do i have software experience?");
  experience = experience.toLowerCase();
  if (experience == "yes" || experience == "y") { alert("i wish"); }
  else if (experience == "no" || experience == "n") { alert("unfortunately"); score++; }
  else { alert(" please choose yes or no"); }
  return (experience);
}
software();



function design() {
  let web = prompt("do i prefer to design complex web bages?");
  web = web.toLowerCase();
  if (web == "yes" || web == "y") { alert("it will take time"); score++; }
  else if (web == "no" || web == "n") { alert("it will not take time"); }
  else { alert(" please choose yes or no"); }
  return (web);
}
design();



function money() {
  let business = prompt('does  my  business depend on these web bages?');
  business = business.toLowerCase();
  if (business == "yes" || business == "y") { alert("yes it is a business"); score++; }
  else if (business == "no" || business == "n") { alert("you are wrong"); }
  else { alert(" please choose yes or no"); }
  return (business);
}
money();



function job() {
  let pay = prompt("Do you think I am getting more than 200 jd? ");
  pay = pay.toLowerCase();
  if (pay == "yes" || pay == "y") { alert("you will git agreat job"); score++; }
  else if (pay == "no" || pay == "n") { alert("iam soory to hear that"); }
  else { alert(" please choose yes or no"); }
  return (pay);
}
job();




function help() {
  let work = prompt('am i professional in my work?');
  work = work.toLowerCase();
  if (work == "yes" || work == "y") { alert("you will get it"); score++; }
  else if (work == "no" || work == "n") { alert("our students will help you"); }
  else { alert(" please choose yes or no"); }
  return (work);
}
help();



function sign() {
  let number = prompt("what is my preferred number from 1 to 10?");
  console.log(number);
  let perfer = 7;
  for (let i = 0; i < 3; i++) {
    if (number == perfer) { alert("yes you are right i really prefer it"); score++; break; }
    else if (number > perfer) { console.log(number); number = prompt("try again it is higher"); }
    else if (number < perfer) { console.log(number); number = prompt("try again it is lower"); }
  }
  alert("it was number 7");
  return (number);
}
sign();









function country() {
  
  let countries = ["Ireland", "South Africa", "Canada", "Sweden ", "Romania", "Italy", "turkey", "greece"];
  for (let j = 0; j <= 6; j++) {
    let city = prompt(' what do you think my favorite country?')

    for (let i = 0; i < countries.length; i++) {
      if (countries[i] == city) {
        console.log(countries[i]);
        console.log(city)
          ;
        alert("correct");
        j = countries.length + 2;
        alert(countries);


        score++;
        alert(score);
        break;
      }


    }

  } alert("nice");
}


country();














