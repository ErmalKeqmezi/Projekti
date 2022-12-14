const loginForm= document.querySelector("form.login");
const signupForm= document.querySelector("form.signup");
const loginBtn= document.querySelector("label.login");
const signupBtn= document.querySelector("label.signup");
const loginText= document.querySelector(".login");
const signupText= document.querySelector(".signup");

signupBtn.onclick = () => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
}

loginBtn.onclick = () => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
}