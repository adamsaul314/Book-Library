const myLibrary = []

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function addBookToLibrary(title, author) {
    const newBook = new Book(title, author);
    myLibrary.push(newBook);
}