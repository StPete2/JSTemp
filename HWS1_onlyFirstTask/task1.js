// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.
// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.
// Реализуйте геттер allBooks, который возвращает текущий список книг.
// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.
// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.
// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
    #books = [];
    constructor(books) {
        if (books.length !== Array.from(new Set(books)).length) {
            throw new Error("There are duplicates in the library");
        }
        this.#books = books;
    }

    get allBooks() { // получение списка книг
        return this.#books;
    }
    addBook(title) {
        // добавление книги
        if (this.#books.indexOf(title) !== -1) {
            throw new Error(
                "Can't add the book to the libarary as there is such already"
            );
        }
        this.#books.push(title);
        return this.#books;
    }
    removeBook(title) {
        // удаление книги
        if (this.#books.indexOf(title) === -1) {
            throw new Error(
                "Can't delete the book as there is no such book in the library"
            );
        }
        this.#books = this.#books.filter(
            (elem) => elem !== this.#books[this.#books.indexOf(title)]
        );
    }
    hasBook(title) {
        // проверка на наличие книги в библиотеки
        if (this.#books.indexOf(title) === -1) {
            return false;
        }
        return true;
    }
}

const library = new Library([]);
console.log(library.allBooks);
library.addBook("Test Name");
library.addBook("Test Name2");
console.log(library.allBooks);
library.removeBook("Test Name2");
console.log(library.allBooks);
console.log(library.hasBook("Test Name"));
library.addBook("Test Name3");
console.log(library.allBooks);

const library2 = new Library(["Test book", "Test book3", "Test book2"]);
console.log(library2.allBooks);

