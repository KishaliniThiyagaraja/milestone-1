document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('hello')
    const usernic = document.getElementById('login-userNIC').value;
    const password = document.getElementById('login-password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.userNIC === usernic && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        if (user.role === 'admin') {
            window.location.href = 'admindashboard.html';
        } else {
            window.location.href = 'studentdashboard.html';
        }
    } else {
        alert('Invalid UserNIC or password!');
    }
});






