const newPicBtn = document.querySelector("#update-pic");
const newPicModal = document.querySelector("#update-pic-modal");
const closePicModal = document.querySelector("#cancel-modal");


//function to display and hide update-profile-picture modal
newPicBtn.addEventListener("click", function() {
    newPicModal.classList.add("modal");
    document.querySelector("body").style.overflow="hidden";
});

closePicModal.addEventListener("click", function() {
    newPicModal.classList.remove("modal");
    document.querySelector("body").style.overflow="visible";
});

async function newPicFormHandler(event) {
    event.preventDefault();
    id = req.session.user_id;
  
    const response = await fetch(`/api/user/${id}`,  {
      method: 'PUT',
      body: JSON.stringify({
        image_path
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(response)

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText );
    }
}
  
document.querySelector('#profile-image-btn').addEventListener('submit', newPicFormHandler);