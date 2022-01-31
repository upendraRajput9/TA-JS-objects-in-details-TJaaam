class BookList{
    constructor(root,list=[]){
this.books=list
this.root=root
    }
    add(title,author,isbm){
        let book=new Book(title,author,isbm)
        this.books.push(book)
        this.createUI()
    }
    handleDelete(id){
        let index=this.books.findIndex((book)=> book.id===id);
        this.books.splice(index,1)
        this.createUI()
    }
    createUI(){
        this.root.innerHTML=""
        this.books.forEach(book=>{
            
            let deletebook= book.createUI();
        deletebook.querySelector(`.cross`).addEventListener(`click`,this.handleDelete.bind(this,book.id))
        this.root.append(deletebook)
        })
        
    }
}

class Book{
    constructor(title,author,isbm){
this.title=title;
this.isbm=isbm
this.author=author;
this.id= Date.now()
    }
createUI(){
    let tr = document.createElement(`tr`)
    let tdTitle= document.createElement(`td`)
    tdTitle.innerText=this.title
    let tdAuthor= document.createElement(`td`)
    tdAuthor.innerText=this.author
    let tdIsbm= document.createElement(`td`)
    tdIsbm.innerText=this.isbm
    let tdCross= document.createElement(`td`)
    tdCross.classList.add(`cross`)
    tdCross.innerText=`❌`
    // tdCross.addEventListener(`click`,handleDelete.bind(this))
    tr.append(tdTitle,tdAuthor,tdIsbm,tdCross)
    return tr
}
}
let form = document.querySelector(`form`)

let mybook=new BookList(document.querySelector(`tfoot`))

form.addEventListener(`submit`,(event)=>{
    
    event.preventDefault();
    let titleValue=event.target.elements.title.value;
    event.target.elements.title.value=""
    let authorValue=event.target.elements.author.value;
    event.target.elements.author.value=""
    let isbmValue=event.target.elements.isbm.value;
    event.target.elements.isbm.value=""
    mybook.add(titleValue,authorValue,isbmValue)
   
})