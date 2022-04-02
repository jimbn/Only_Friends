// this gets connected to the handelbars file with a script tag

// login handler function
async function loginHandler(event) {
    event.preventDefault();

    const email  = document.querySelector('#email-login').value.trim();
    const password  = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            throw error(response.statusText);
        }
    }

}


// function to handle logout functionality
async function logout(event){
    // this is to test to see if the button triggers the function
    console.log('You clicked the logout button')
//    makes request to logout route in api user-routes
    const logoutResponse = await fetch('/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });
// if the reesponse is good then redirects user to home route  '/'
    if(logoutResponse.ok){
        // make sure that this matche
        document.location.replace('/modal');
    }else {
        // responds with error code
        throw error(response.statusText);
    }
}

// listening for log out button click
// document.querySelector('#logout').addEventListener('submit', logout);
// listening for log in button click
document.querySelector('.login-form').addEventListener('submit', loginHandler);

