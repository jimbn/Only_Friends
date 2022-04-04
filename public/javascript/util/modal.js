const loginBtn = document.querySelector("#open-login-modal");
const loginModal = document.querySelector("#loginModal");
const closeLoginModal = document.querySelector("#login-btn");

const signupBtn = document.querySelector("#open-signup-modal");
const signupModal = document.querySelector("#signupModal");
const closeSignupModal = document.querySelector("#signup-btn");

// function to display and hide login modal
loginBtn.addEventListener("click", function() {
    loginModal.classList.add("modal");
});

closeLoginModal.addEventListener("click", function() {
    loginModal.classList.remove("modal");
});

// function to display and hide signup modal
signupBtn.addEventListener("click", function() {
    signupModal.classList.add("modal");
});

closeSignupModal.addEventListener("click", function() {
    signupModal.classList.remove("modal");
});