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

document.querySelector('#post_body').addEventListener('input', autoResize, false);

function autoResize() {
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + 'px';
};

async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#title').value;
    const post_body = document.querySelector('#post_body').value;
    const category_name = document.querySelector('#category_name').value;
    // let imageUrl = document.querySelector('#post-image').value.split('\\');
    // let image_path = `\\public\\images\\` + imageUrl[imageUrl.length -1];
    // console.log(imageUrl);

  //does not allow for a fetch request if any are left empty 
  // if(!title & !post_body) {
    const response = await fetch("/api/posts/",  {
      method: 'post',
      body: JSON.stringify({
        title,
        post_body,
        category_name,
        image_path
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response)
  // }
    

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText );
    }
}
  
document.querySelector('#image-btn').addEventListener('submit', newFormHandler);