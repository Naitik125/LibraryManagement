console.log("Hii")
// constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}
// Display constructor
function Display() {

}

Display.prototype.add = function (book) {
    console.log("Adding")
    let uistring = `<tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
  </tr>`
    let tableBody = document.getElementById("tableBody")
    tableBody.innerHTML += uistring

}
Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm")
    libraryForm.reset();
}

Display.prototype.validateBooK = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    }
    else {
        return true
    }
}

Display.prototype.show =function(type, mess){
    let message = document.getElementById('msg');
    // console.log("hbhdbhch")
    message.innerHTML =` <div class="alert alert-warning alert-dismissible fade show" role="alert">
    <strong>${type}!</strong> ${mess}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`

  setTimeout(() => {
      message.innerHTML=""
      
  }, 2000);
}



let libraryForm = document.getElementById("libraryForm")
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    console.log("You have been submitted")
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction')
    let programming = document.getElementById('programming')
    let cooking = document.getElementById('cooking')

    if (fiction.checked) {
        type = fiction.value
    }
    else if (programming.checked) {
        type = programming.value
    }
    else {
        type = cooking.value
    }
    // e.preventDefault();
    let book = new Book(name, author, type)

    console.log(book)
    let display = new Display()
    if (display.validateBooK(book)) {
        display.add(book)
        display.clear();
        display.show("Success", "Your book has been successfully added")

    }
    else {
        display.show("Error", "Sorry we can not add this book")

    }



}

