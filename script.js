const form = document.querySelector("form");
const validationMessage = document.querySelector("p.form-validation");
const inputEmail = document.querySelector("input#email");
const divFormSubmitted = document.querySelector("div.formSubmitted");
const main = document.querySelector("main");
const dismissBtn = document.querySelector("div.formSubmitted button");

form.addEventListener("submit", e => {
    e.preventDefault();
    const emailPattern = /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
    if(emailPattern.test(inputEmail.value))
    {
        validationMessage.style.display = "none";
        inputEmail.className = "form-email";

        divFormSubmitted.style.display = "flex";
        main.style.display = "none";
    }
    else
    {
        validationMessage.style.display = "block";
        inputEmail.className = "form-email wrong-email";
    }
});

dismissBtn.addEventListener("click", e => {
    window.location.reload();
});
