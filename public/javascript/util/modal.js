const loginBtn = document.querySelector("#open-login-modal");
const loginModal = document.querySelector(".loginModal");
const closeLoginModal = document.querySelector("#login-btn")

loginBtn.addEventListener("click", function() {
    loginModal.classList.add("modal");
});
closeLoginModal.addEventListener("click", function() {
    loginModal.classList.remove("modal");
});

// closeModalBtn.addEventListener(`click`,function() {
//     locError.classList.remove(`modal`);
// });

