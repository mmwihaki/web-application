function getName() {
  let yearOfBirth = document.getElementByID("yearOfBirth").value);
  let monthOfBirth = Number (document.getElementByID("month-input").value);
  let dayOfBirth = Number (document.getElementByID("day-input").value);
  let genders = documents.getElementsByName("gender");

  //gender function
  function getGender () {
    for (let gender of genders){
      if (gender.checked){
        return gender.value;
      }
    }
  }

  let myGenderValue = getGender ();
  console.log(myGenderValue);

//validation
  function Validator(){
    if (monthOfBirth <1 || monthOfBirth > 12) {
      return false;
    } else {
      return true;
    }
  }

function dayValidator () {
  if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
    if (dayOfBirth > 28 || dayOfBirth < 1) {
      return false;
    }
  }
}
