class Book {
  constructor(title, category, author) {
    this.title = title
    this.category = this.category
    this.author = author
    this.isRead = false
    this.finishedDate = `no finished`
  }
  markBookAsRead() {
    this.isRead = true
    let today = Date.now()
    this.finishedDate= Date(today)
     this.finishedDate
  }
    
}

class Booklist {
  constructor(...books) {
    this.currentBook = 0;
  }
  add(addBook) {
    this.books.push(addBook)
  }
  getCurrentBook(index) {
return this.books[this.currentBook ]
  }
  getNextBook() {
    this.currentBook=this.currentBook+1
    return this.books[this.currentBook+1]
  }
  getPrevBook() {
    this.currentBook=   this.currentBook-1
    return this.books[this.currentBook-1]
  }
  changeCurrentBook(index) {
    this.currentBook=index
    return this.currentBook
  }
}


 
