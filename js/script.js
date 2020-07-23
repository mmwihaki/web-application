
function yourAkanName() {

}
var yearOfBirth = 1996;
var monthOfBirth = 2;
var dayOfBirth = 6;


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
var century = yearOfBirth % 100 === 0 ? yearOfBirth/100 : Math.floor(yearOfBirth/100) + 1;
console.log(century);

//dayOfTheWeek
var dayOfTheWeek = ( ( (century/4) -2*century-1) + ((5*yearOfBirth/4) ) + ((26*(monthOfBirth+1)/10)) + dayOfBirth ) % 7
console.log(dayOfTheWeek);
