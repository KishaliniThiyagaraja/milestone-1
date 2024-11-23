document.getElementById('addBookForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const book = {
        name: document.getElementById('bookName').value,
        isbn: document.getElementById('isbn').value,
        publisher: document.getElementById('publisher').value,
        copies: parseInt(document.getElementById('copies').value, 10),
        coverUrl: document.getElementById('coverUrl').value,
        genre: document.getElementById('genre').value,
    };

    let books = JSON.parse(localStorage.getItem('books')) || [];
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    alert('Book added successfully!');
    document.getElementById('addBookForm').reset();
    displayBooks();
});

document.getElementById('addMemberForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const member = {
        name: document.getElementById('memberName').value,
        nic: document.getElementById('nic').value,
        password: document.getElementById('password').value,
    };

    let members = JSON.parse(localStorage.getItem('members')) || [];
    members.push(member);
    localStorage.setItem('members', JSON.stringify(members));
    alert('Member added successfully!');
    document.getElementById('addMemberForm').reset();
    displayMembers();
});

function displayBooks() {
    const booksTableBody = document.getElementById('booksTable').getElementsByTagName('tbody')[0];
    booksTableBody.innerHTML = '';

    let books = JSON.parse(localStorage .getItem('books')) || [];

    books.forEach((book) => {
        let row = booksTableBody.insertRow();

        let cellName = row.insertCell(0);
        let cellISBN = row.insertCell(1);
        let cellPublisher = row.insertCell(2);
        let cellCopies = row.insertCell(3);
        let cellGenre = row.insertCell(4);
        let cellCover = row.insertCell(5);

        cellName.textContent = book.name;
        cellISBN.textContent = book.isbn;
        cellPublisher.textContent = book.publisher;
        cellCopies.textContent = book.copies;
        cellGenre.textContent = book.genre;

        let img = document.createElement('img');
        img.src = book.coverUrl;
        cellCover.appendChild(img);
    });
}

function displayMembers() {
    const membersTableBody = document.getElementById('membersTable').getElementsByTagName('tbody')[0];
    membersTableBody.innerHTML = '';

    let members = JSON.parse(localStorage.getItem('members')) || [];

    members.forEach((member) => {
        let row = membersTableBody.insertRow();

        let cellName = row.insertCell(0);
        let cellNIC = row.insertCell(1);
        let cellPassword = row.insertCell(2);

        cellName.textContent = member.name;
        cellNIC.textContent = member.nic;
        cellPassword.textContent = member.password;
    });
}

// Initial display of books and members
displayBooks();
displayMembers();

