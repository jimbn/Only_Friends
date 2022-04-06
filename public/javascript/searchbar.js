const searchButtonEl = document.querySelector('#user-search-bar');
const searchBarEl = document.querySelector('#search-bar');
let usersArray = [];
// function to fetch all user data 
async function getAllUsers(event) {
    console.log('Search bar pressed')
    // this graves the text from the text box
    const userName = searchBarEl.value;
    console.log(userName);
    
    // Making request to get all users in db
    const response = await fetch('/api/users/');
    // updating value of array to response value
    usersArray = await response.json();
    console.log(usersArray);

    // filterinng the new array woth users by user name
    const filteredUsers = usersArray.filter((users) => {
        return (
            users.username.includes(userName)
        )
    });
    console.log(filteredUsers);
    // gets first posibly only element in the sorted array and gets its id
    const userId = filteredUsers[0].id;
    console.log(userId);
    // passes id to api route for one user
    document.location.replace(`/api/users/${userId}`);
    
};



// function to handel search bar when clicked
function searchBarHandeler(event) {


};


searchButtonEl.addEventListener('click', getAllUsers);