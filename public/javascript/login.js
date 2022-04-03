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




// listening for log in button click
document.querySelector('.login-form').addEventListener('submit', loginHandler);

