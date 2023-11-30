function book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;    
}

const content = document.querySelector(".content");
const add_btn = document.querySelector(".add");
const log_in_btn = document.querySelector(".log_in")

log_in_btn.addEventListener("mousedown", () =>{ log_in_btn.classList.add("active")});
log_in_btn.addEventListener("mouseup",()=>{log_in_btn.classList.remove("active")});

add_btn.addEventListener("mousedown", () =>{ add_btn.classList.add("active")});
add_btn.addEventListener("mouseup",()=>{add_btn.classList.remove("active")});

const book1 = new book("C++","kawal",1496,true);

console.log(book1);

function appendBook(book) {
    const bookCard = document.createElement("div");
    const bookLeft = document.createElement("div");
    const bookTitle = document.createElement("div");
    const bookAuthorDiv = document.createElement("div");
    const bookAuthor = document.createElement("div");
    const bookRight = document.createElement("div");
    const bookPagesTxt = document.createElement("div");
    const bookPages = document.createElement("div");
    const readDiv = document.createElement("div");
    const edit_button = document.createElement("button");
    const readtxt = document.createElement("label");
    const checkbox = document.createElement("input");
    bookCard.classList.add("book");
    bookLeft.classList.add("book_left");
    bookRight.classList.add("book_right");
    bookAuthor.classList.add("author");
    bookAuthorDiv.classList.add("book_left_bottom","book_common");
    bookTitle.classList.add("book_left_top","book_common");
    bookPagesTxt.classList.add("page_txt","book_common");
    readDiv.classList.add("read","book_common");
    readtxt.setAttribute("for","read_status")
    checkbox.setAttribute("id","read_status");
    checkbox.setAttribute("type","checkbox")
    bookPages.classList.add("pages","book_common");
    edit_button.classList.add("edit","book_common");
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPagesTxt.textContent = "Pages";
    readtxt.textContent = "Read";
    bookPages.textContent = book.pages;
    edit_button.textContent = "Edit";
    content.appendChild(bookCard);
    bookCard.appendChild(bookLeft);
    bookCard.appendChild(bookRight);
    bookLeft.appendChild(bookTitle);
    bookLeft.appendChild(bookAuthorDiv);
    bookAuthorDiv.appendChild(bookAuthor);
    bookRight.appendChild(bookPagesTxt);
    bookRight.appendChild(readDiv);
    readDiv.appendChild(checkbox);
    readDiv.appendChild(readtxt);
    bookRight.appendChild(bookPages);
    bookRight.appendChild(edit_button);
}

function addBook(){
    const addCard = document.createElement("form");
    const bookLeft = document.createElement("div");
    const bookTitle = document.createElement("input");
    const bookAuthorDiv = document.createElement("div");
    const bookAuthor = document.createElement("input");
    const bookRight = document.createElement("div");
    const bookPagesTxt = document.createElement("div");
    const bookPages = document.createElement("input");
    const readDiv = document.createElement("div");
    const done_button = document.createElement("button");
    const readtxt = document.createElement("label");
    const checkbox = document.createElement("input");
    addCard.classList.add("book");
    bookLeft.classList.add("book_left");
    bookRight.classList.add("book_right");
    bookAuthor.classList.add("author");
    bookAuthorDiv.classList.add("book_left_bottom","add_common");
    bookTitle.classList.add("book_left_top","add_common");
    bookPagesTxt.classList.add("page_txt","add_common");
    readDiv.classList.add("read","add_common");
    bookTitle.setAttribute("type","text");
    bookAuthor.setAttribute("type","text");
    bookPages.setAttribute("type","number")
    bookTitle.setAttribute("name","title");
    bookAuthor.setAttribute("name","author");
    bookPages.setAttribute("name","book_pages")
    bookTitle.setAttribute("id","title");
    bookTitle.setAttribute("placeholder","Title");
    bookAuthor.setAttribute("id","author");
    bookAuthor.setAttribute("placeholder","Author(s)");
    bookPages.setAttribute("id","book_pages")
    bookPages.setAttribute("placeholder","1")
    readtxt.setAttribute("for","read_status")
    checkbox.setAttribute("id","read_status");
    checkbox.setAttribute("name","read_status");
    checkbox.setAttribute("type","checkbox")
    bookPages.classList.add("pages");
    done_button.classList.add("edit","book_common");
    bookPagesTxt.textContent = "Pages";
    readtxt.textContent = "Read";
    done_button.textContent = "Done";
    done_button.setAttribute("type","button")
    content.appendChild(addCard);
    addCard.appendChild(bookLeft);
    addCard.appendChild(bookRight);
    bookLeft.appendChild(bookTitle);
    bookLeft.appendChild(bookAuthorDiv);
    bookAuthorDiv.appendChild(bookAuthor);
    bookRight.appendChild(bookPagesTxt);
    bookRight.appendChild(readDiv);
    readDiv.appendChild(checkbox);
    readDiv.appendChild(readtxt);
    bookRight.appendChild(bookPages);
    bookRight.appendChild(done_button);
}

addBook();
appendBook(book1);