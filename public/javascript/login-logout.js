// this gets connected to the handelbars file with a script tag

// login handler function


// function to handle logout functionality
async function logout(){
    // this is to test to see if the button triggers the function
    console.log('You clicked the logout button')
   
    const logoutResponse = await fetch('/api/user/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if(logoutResponse.ok){
        document.location.replace('/');
    }else {
        alert(response.statusText);
    }
}
document.querySelector('#logout').addEventListener('click', logout);