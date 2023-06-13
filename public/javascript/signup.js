
// sign up form handler function 
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const errorMessageText = document.getElementById('errorMessage');
  const errorModal = document.getElementById('signupError')

  // cheks the string for .
  const includesDot = email.includes('.');
  // checks the string for @
  const includesAmper = email.includes('@');
  // gets the string length
  const paswordLength = password.length;


  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    // check the response status
    if (response.ok) {
      console.log('success');
      document.location.replace('/')
    }

    // checks to see if these are false 
    if (!includesDot || !includesAmper) {
      // displays modal if @ or . charactersare missing by adding class
      errorModal.classList.add('modal')
      // changes the html text
      errorMessageText.innerHTML = "Invalid Email Format!";
      //overflow disables scrolling
      document.querySelector('body').style.overflow = "hidden";
      console.log(response.statusText);
    }

    // checks if the password is less than 3 characters
    if (paswordLength < 3) {
      // displays modal if less than 3 characters by adding class
      errorModal.classList.add('modal')
      // changes the html text
<<<<<<< HEAD
      errorMessageText.innerHTML = "Least 3 Characters Long!";
=======
      errorMessageText.innerHTML = "Password Must Be at Least 3 Characters Long!";
>>>>>>> cb08d9bc92d6902bb1bf5132e0d14cde19a8369c
      //overflow disables scrolling
      document.querySelector('body').style.overflow = "hidden";
      console.log(response.statusText);
    }

    // if username and passward are wrong
    else {
      // displays modal by adding class
      errorModal.classList.add('modal')
      // changes the html text
      errorMessageText.innerHTML = "Invalid Email Format! & Password Must Be at Least 3 Characters Long! or Emailalready Exists";
      //overflow disables scrolling
      document.querySelector('body').style.overflow = "hidden";
      console.log(response.statusText);
    }
  }
}

// function to mae model invisable
function exitButtonHandler(event) {
  // selects model and removes class
  document.querySelector('#signupError').classList.remove('modal');
  // removes ability to scroll
  document.querySelector('body').style.overflow = "visible";
};

// document.querySelector('.signup-form').addEventListener('click', signupFormHandler);
document.querySelector('#signup-btn').addEventListener('click', signupFormHandler);
document.querySelector('#errorSignUpBtn').addEventListener('click', exitButtonHandler);

// this gets connected to the handelbars file with a script tag
