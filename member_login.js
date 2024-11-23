document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nic = document.getElementById('loginNic').value;
    const password = document.getElementById('loginPassword').value;

    let members = JSON.parse(localStorage.getItem('members')) || [];
    let member = members.find(m => m.nic === nic && m.password === password);

    if (member) {
        localStorage.setItem('loggedInMember', JSON.stringify(member));
        alert('Login successful!');
        window.location.href = 'gallery.html';
    } else {
        alert('Invalid NIC or password.');
    }
});
