function getName() {
  let yearOfBirth = document.getElementByID(yearOfBirth).value);

  let genders = documents.getElementsByName("gender");

  function getGender () {
    for (let gender of genders){
      if (gender.checked){
        return gender.value;
      }
    }
  }

  let myGenderValue = getGender ();
  console.log(myGenderValue);

  function Validator(){
    if (monthOfBirth <1 || monthOfBirth > 12) {
      return false;
    } else {
      return true;
    }

    }
  }

}
