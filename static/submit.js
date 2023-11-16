const userNameInput = document.getElementById("nick");
const surnameInput = document.getElementById("kanoe_kamarad");
// const passowordInput = document.getElementById("password");
// const confirmPasswordInput = document.getElementById("confirm-password");
// const birthDateInput = document.getElementById("birthdate");
const warningField = document.getElementsByClassName("warning");
const sButton = document.getElementById("button");

let valid;

//fajfku učitleka radila udělat tak že když je něco dobře je tam obrázek disply none

function validateForm()
{
    valid = true;
    showWarning(validateUserName(), "fnameLength");
    showWarning(validateFriendName(), "snameLength");
    //showWarning(valitdatePassword(), "passwordWar");
    //showWarning(validateAge(), "age");

}

function validateUserName()
{
    if(userNameInput.value.length < 2)
    {
        valid = false;
        return Warnings.fnameTooShort;
    }
    if(userNameInput.value.length > 20)
    {
        valid = false;
        return Warnings.fnameTooLong;
    }
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(userNameInput.value)) {
        valid = false;
    }
}

function validateFriendName() {
    if(surnameInput.value.length == 1)
    {
        valid = false;
        return Warnings.lnameTooShort;
    }
    if(surnameInput.value.length > 20)
    {
        valid = false;
        return Warnings.lnameTooLong;
    }
    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(userNameInput.value)) {
        valid = false;
    }

}

function validateSurname()
{
    if(surnameInput.value.length > 2)
    {
        valid = false;
        return Warnings.lnameTooShort;
    }
    if(surnameInput.value.length > 32)
    {
        valid = false;
        return Warnings.lnameTooLong;
    }
    valid = valid && true
}
function valitdatePassword()
{
    if((passowordInput.value.length < 6 || confirmPasswordInput.value.length < 6) &&
        (confirmPasswordInput.value.length > 0 || passowordInput.value.length > 0))
    {
        return Warnings.pwTooShort;
    }
    if(passowordInput.value != confirmPasswordInput.value)
    {
        return Warnings.pwDontMatch;
    }
    valid = valid && true
}
function validateAge()
{
    let ageCheck;
    ageCheck = new Date();
    birthdate = new Date(birthDateInput.value);
    
    ageCheck.setFullYear(ageCheck.getFullYear() - 15);
    console.log("age check " + ageCheck);
    console.log("birthdate " + birthdate);

    if(ageCheck < birthdate) {
        
        return Warnings.isUnderFifteen;
    }
    
}

function showWarning(warningMessage, id)
{
    let warningElement = document.getElementById(id);
    warningElement.textContent = warningMessage;
}

function playSound()
{
    console.log("sound played");
}

const Warnings = {
    fnameTooShort: "Name is too short.",
    fnameTooLong: "Name is too long.",
    lnameTooShort:"Friend is too short.",
    lnameTooLong: "Friend is too long.",
    pwTooShort: "Password is too short.",
    pwDontMatch: "Passwords don't match.",
    isUnderFifteen: "Under 15 years old",
    isEighteen: "18",
    

}

document.addEventListener('submit', (e) => {
    if (!valid) {
        console.log('prevented default');
        e.preventDefault();
    }

});