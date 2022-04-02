// this gets connected to the handelbars file with a script tag

// login handler function


// function to handle logout functionality
async function logout(){
    // this is to test to see if the button triggers the function
    console.log('You clicked the logout button')
//    makes request to logout route in api user-routes
    const logoutResponse = await fetch('/api/user/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });
// if the reesponse is good then redirects user to home route  '/'
    if(logoutResponse.ok){
        document.location.replace('/');
    }else {
        // responds with error code
        alert(response.statusText);
    }
}
// listening for log out button click
document.querySelector('#logout').addEventListener('click', logout);