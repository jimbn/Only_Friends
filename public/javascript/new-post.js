const newPostBtn = document.querySelector("#new-post");
const newPostModal = document.querySelector("#newPostModal");
const closePostModal = document.querySelector("#close-btn");

const body = document.querySelector("body");

//function to display and hide newPost modal
newPostBtn.addEventListener("click", function() {
    newPostModal.classList.add("modal");
    body.style.overflow="hidden";
});

closePostModal.addEventListener("click", function() {
    newPostModal.classList.remove("modal");
    body.style.overflow="visible";
});