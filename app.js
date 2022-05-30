var form = document.getElementById("form");
var submit = document.getElementById("submit");

function formAlert() {
    var firstName = form.querySelector("#firstName").value;
    var lastName = form.querySelector("#last-name").value;
    var age = form.querySelector("#age").value;
    var gender = form.querySelector("input[name=gender]:checked").value;
    var location = form.querySelector("#travel-location").value;
    var diet = [];
    if (form.querySelector("#vegan").checked) {
        diet.push("vegan");
    }
    if (form.querySelector("#gluten").checked) {
        diet.push("gluten");
    }
    if (form.querySelector("#paleo").checked) {
        diet.push("paleo");
    }

    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


submit.addEventListener("click", formAlert);