const newPicBtn = document.querySelector("#update-pic");
const newPicModal = document.querySelector("#update-pic-modal");
const closePicModal = document.querySelector("#cancel-modal");
const profileImage = document.getElementById('profile-image-btn');
//function to display and hide update-profile-picture modal
newPicBtn.addEventListener("click", function () {
  newPicModal.classList.add("modal");
  document.querySelector("body").style.overflow = "hidden";
});
closePicModal.addEventListener("click", function () {
  newPicModal.classList.remove("modal");
  document.querySelector("body").style.overflow = "visible";
});
// async function newPicFormHandler(event) {
//     event.preventDefault();
//     console.log(event.target.files);
//     return
//     const id = document.querySelector(".logged-id").innerHTML;
// console.log(event);
//     console.log(id);
//     // debugger
//     const response = await fetch(`/api/users/${id}`,  {
//       method: 'PUT',
//       body: JSON.stringify({
//         user_image_path
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     console.log(response)
//     if (response.ok) {
//       document.location.reload();
//     } else {
//       alert(response.statusText );
//     }
// }
// document.querySelector('#profile-image-btn').addEventListener('click', newPicFormHandler);
profileImage.addEventListener('click', async function (event) {
    event.preventDefault();
    const imageFile = document.getElementById('profile-image-id').files;

    if (!imageFile) {
      document.location.replace('/')
      return;
    }

    console.log("this is the imageFile", imageFile[0]);

    const formData = new FormData();

    formData.append('image', imageFile[0]);
    const options = {
      method: 'PUT',
      body: formData
    }

    const id = document.querySelector(".logged-id").innerHTML;
    console.log(event);
    console.log(id);

    const response = await fetch(`/api/users/${id}`, options)

    const data = await response.json();
    console.log(data);
    console.log(data[1][0].user_image_path);
    
    if (data.ok) {
      document.querySelector('#update-pic-modal').classList.remove('modal')
      window.location.reload();
    }
});