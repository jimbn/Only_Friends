
// make fetch request to the delete api route 
async function deletePost(event){
    event.preventDefault();
// gets id from window url 
// const postWindowId = (window.location).href;
// // turns the url string in to an array 
// const urlArray = postWindowId.split('/');
// // gets the last item in the array which is the post id
// const id = urlArray[urlArray.length - 1];
// console.log(id);
const id = document.getElementById('post-title').getAttribute('data-id');
console.log(id);
  
if(id){
       const response = await fetch(`/api/posts/${id}`, {
           method: 'DELETE',
           body: JSON.stringify({
               id
           }),
           headers: {
               'Content-Type' : 'application/json'
           }
       });
       if(response.ok){
           document.location.reload();
       } else {
        console.log(response.statusText + ' ' + response.status);
       }
   } 
}

// listening for delete button click
// ****to do put the id in the correct handlebars but gets the id from the page the single comment is at
document.querySelector('#delete-post').addEventListener('click', deletePost )