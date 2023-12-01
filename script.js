function book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;    
}

let add_btn_clicks = 1;
const content = document.querySelector(".book_list");
const add_btn = document.querySelector(".add");
const log_in_btn = document.querySelector(".log_in")
const addCard = document.createElement("form");

log_in_btn.addEventListener("mousedown", () =>{ log_in_btn.classList.add("active")});
log_in_btn.addEventListener("mouseup",()=>{log_in_btn.classList.remove("active")});
add_btn.addEventListener("mousedown", () =>{ add_btn.classList.add("active");});
add_btn.addEventListener("mouseup",()=>{add_btn.classList.remove("active")});

add_btn.addEventListener("click", addBook);

const book1 = new book("C++","kawal",1496,true);

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
    readtxt.setAttribute("for",`${book.title}`)
    checkbox.setAttribute("id",`${book.title}`);
    if(book.read){
        checkbox.setAttribute("checked","checked");
    }
    checkbox.setAttribute("class","read_status")
    checkbox.setAttribute("type","checkbox")
    bookPages.classList.add("pages","book_common");
    edit_button.classList.add("edit","book_common");
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookPagesTxt.textContent = "Pages";
    readtxt.textContent = "Read";
    bookPages.textContent = book.pages;
    edit_button.textContent = "Delete";
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
    edit_button.addEventListener("mousedown", () =>{edit_button.classList.add("active");});
    edit_button.addEventListener("mouseup",()=>{edit_button.classList.remove("active")});
    edit_button.addEventListener("click", () =>{content.removeChild(bookCard)});
}

function addBook(){
    if(add_btn_clicks <=1){
        add_btn_clicks += add_btn_clicks;
        const addDiv = document.querySelector(".add_div")
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
        addDiv.appendChild(addCard);
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
        done_button.addEventListener("mousedown", () =>{ done_button.classList.add("active");});
        done_button.addEventListener("mouseup",()=>{done_button.classList.remove("active")});
        done_button.addEventListener("click",() =>{
            let check = false; 
            if(checkbox.checked){
                check = true;
            }
            const book1 = new book(bookTitle.value,bookAuthor.value,bookPages.value,check);
            appendBook(book1);
            console.log(checkbox.value);
            add_btn_clicks = 1;
            addDiv.textContent = "";
        }); 
    } else if(add_btn_clicks > 1) {
        addCard.classList.add("shake");
        setTimeout(() =>{addCard.classList.remove("shake")},200);
    }
}

