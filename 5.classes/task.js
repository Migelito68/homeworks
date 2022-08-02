class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(newState) {
        if (newState < 0) {
            return this.newState = 0;
        } else if (newState > 100) {
            return this.newState = 100;
        } else {
            return this.newState = newState;
        }
    }

    get state() {
        return this.newState;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let book = this.books.find(book => book[type] === value);
        if(book === undefined){
            return null;
        } else {
            return book;
        }
    }

    giveBookByName(bookName) {
        let book = this.books.find(book => book.name === bookName);
        if(book === undefined) {
            return null;
        } else {
            this.books.splice(this.books.indexOf(book), 1);
            return book;
        }
    }
}

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {}
    }

    addSubject(subjectName) {
        if(this.marks[subjectName] === undefined) {
            this.marks[subjectName] = [];
        }
    }

    addMark(mark, subjectName) {
        if (mark < 1 || mark > 5) {
            return console.log('Ошибка, оценка должна быть числом от 1 до 5!');
        } else if(this.marks[subjectName] === undefined) {
            this.addSubject(subjectName);
            this.marks[subjectName].push(mark);
        } else {
            this.marks[subjectName].push(mark);
        }
    }

    getAverageBySubject(subjectName) {
        if (this.marks[subjectName] === undefined) {
          return console.log('Несуществующий предмет');
        } else {
            let sum = this.marks[subjectName].reduce((acc, item) => acc + item);
            let averageBySubject = sum / this.marks[subjectName].length;
            console.log(`Средний балл по предмету ${subjectName} ${averageBySubject}`);
            return averageBySubject;
        }

    }
    
    getAverage() {
        let arr = Object.values(this.marks);    
        let res = arr.reduce((acc, item) => acc.concat(item));
        let summ = res.reduce((acc, item) => acc + item);
        let average = summ / res.length;
        console.log(`Средний балл по всем предметам ${average}`);
        return average;
    }
        
    exclude(reason) {
        this.excluded = reason;
        if (this.excluded !== undefined) {
            delete this.subject;
            delete this.marks;
        }
        return;
    }
}