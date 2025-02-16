document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;

    if (username) {
        localStorage.setItem('loggedIn', 'true');
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('welcomeMessage').style.display = 'block';
    }
});

window.onload = function() {
    if (localStorage.getItem('loggedIn') === 'true') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('welcomeMessage').style.display = 'block';
    }
}
