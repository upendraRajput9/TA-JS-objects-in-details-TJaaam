class Book {
  constructor(title, category, author, isRead = false) {
    this.title = title
    this.category = this.category
    this.author = author
    this.isRead = this.isRead
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
    this.currentBook = null
  }
  add(addBook) {
    this.books.push(addBook)
  }
  getCurrentBook(index) {
return this.books[index]
  }
  getNextBook(index) {
    return this.books[index+1]
  }
  getPrevBook(index) {
    return this.books[index-1]
  }
  changeCurrentBook(index) {
    return this.books[index]
  }
}

let book1= new Book(`fear`,`outo`)
let book2=new Book(`force`,`create`)

 
