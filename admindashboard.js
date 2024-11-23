document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.role === 'admin') {
        document.getElementById('admin-username').textContent = currentUser.username;
    } else {
        window.location.href = 'login.html';
    }

    document.getElementById('member-management-link').addEventListener('click', function() {
        displaySection('member-management');
        loadMembers();
    });

    document.getElementById('book-management-link').addEventListener('click', function() {
        displaySection('book-management');
        loadBooks();
    });

    document.getElementById('lending-management-link').addEventListener('click', function() {
        displaySection('lending-management');
        loadLending();
    });

    document.getElementById('report-link').addEventListener('click', function() {
        displaySection('report');
        loadReports();
    });

    document.getElementById('book-form').addEventListener('submit', function(e) {
        e.preventDefault();
        addBook();
    });
});

