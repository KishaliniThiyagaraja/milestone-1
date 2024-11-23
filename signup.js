document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const userNIC = document.getElementById('NIC_number').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    const user = { userNIC, password, role };

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Sign up successful!');
    window.location.href = 'login.html';
});


