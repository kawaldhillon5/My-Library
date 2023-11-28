function book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;    
}

const add_btn = document.querySelector(".add");
const log_in_btn = document.querySelector(".log_in")

log_in_btn.addEventListener("mousedown", () =>{ log_in_btn.classList.add("active")});
log_in_btn.addEventListener("mouseup",()=>{log_in_btn.classList.remove("active")});

add_btn.addEventListener("mousedown", () =>{ add_btn.classList.add("active")});
add_btn.addEventListener("mouseup",()=>{add_btn.classList.remove("active")});