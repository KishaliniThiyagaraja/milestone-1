document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.role === 'student') {
        document.getElementById('student-username').textContent = currentUser.username;
    } else {
        window.location.href = 'login.html';
    }

    document.getElementById('search-books-link').addEventListener('click', function() {
        document.getElementById('search-books').style.display = 'block';
        document.getElementById('borrow-history').style.display = 'none';
        document.getElementById('"return-books"').style.display = 'none';
        
    });

    document.getElementById('borrow-history-link').addEventListener('click', function() {
        document.getElementById('search-books').style.display = 'none';
        document.getElementById('borrow-history').style.display = 'block';
        document.getElementById('"return-books"').style.display = 'none';
        loadBorrowHistory();
    });

    document.getElementById('return-books-link').addEventListener('click', function() {
        document.getElementById('search-books').style.display = 'none';
        document.getElementById('borrow-history').style.display = 'block';
        document.getElementById('return-books').style.display = 'none';
        loadBorrowHistory();
    });

});

function searchBooks() {
    const query = document.getElementById('search-query').value.toLowerCase();
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const results = books.filter(book => book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query));

    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';
    results.forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}`;
        searchResults.appendChild(li);
    });
}

function loadBorrowHistory() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const borrowHistory = JSON.parse(localStorage.getItem('borrowHistory')) || [];
    const userBorrowHistory = borrowHistory.filter(record => record.username === currentUser.username);

    const borrowHistoryList = document.getElementById('borrow-history-list');
    borrowHistoryList.innerHTML = '';
    userBorrowHistory.forEach(record => {
        const li = document.createElement('li');
        li.textContent = `${record.bookTitle} borrowed on ${record.borrowDate}`;
        borrowHistoryList.appendChild(li);
    });
}
function returnbooks() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const returnbooks = JSON.parse(localStorage.getItem('return-books')) || [];
    const userreturnbooks = returnbooks.filter(record => record.username === currentUser.username);

    const returnbooksList = document.getElementById('return-books-list');
    returnbooksList.innerHTML = '';
    userreturnbooks.forEach(record => {
        const li = document.createElement('li');
        li.textContent = `${record.bookTitle} return on ${record.returnbooks}`;
        userreturnbooks.appendChild(li);
    });
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}
