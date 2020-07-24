var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var dateComponents = []
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function yourAkanName() {
  event.preventDefault();
  var yearOfBirth = document.getElementById("yearOfBirth").value;


  var gender = document.getElementById("userGender").value;
  if (yearOfBirth === "") {
    document.getElementById("answer").innerHTML = "please enter a valid date!";
  }

  var dateComponents = yearOfBirth.split("-");


  var year = dateComponents[0];
  var month = dateComponents[1] - 1;
  var date = dateComponents[2];

  var getDate = new Date(year, month, date);


  var dateIndex = getDate.getDay();


  if (gender === "Male") {
     document.getElementById("answer").innerHTML = maleNames[dateIndex];
  } else {
      document.getElementById("answer").innerHTML = femaleNames[dateIndex];
  }

}




/*
var monthOfBirth = 2;
var dayOfBirth = 6;

var gender = "female";

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

var weekDay = Number((dayOfTheWeek).toFixed(1));
console.log(weekDay);
*/
