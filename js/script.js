var yearOfBirth = 1996;
var monthOfBirth = document.getElementById("monthOfBirth");
var dayOfBirth = 14;


//vaidating dateOfBirth
if (dayOfBirth >= 1 && dayOfBirth <= 31){
  console.log("Awesome!");
}else {
  console.log("please enter a valid date");
}

//validating monthOfBirth
if (monthOfBirth >= 1 && monthOfBirth <= 12){
  console.log("Awesome!");
}else {
  console.log("please enter a valid date");
}

//century from yearOfBirth

var century = yearOfBirth % 100 === 0 ? year/100 : Math.floor(yearOfBirth/100) + 1;
console.log(century);
