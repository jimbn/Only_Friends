

async function logoutUser() {
    console.log('logout button is clicked')
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
       
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};
// EVENT LISTENER TO LOGOUT THE USER WHEN THEY CLICK BUTTON 
document.querySelector('#logout').addEventListener('click', logoutUser);