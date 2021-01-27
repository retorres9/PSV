function getYear() {
    let year = new Date();
    let copy = document.querySelector(".copy").textContent;
    console.log(copy.textContent = "asdas");
    copy.textContent = `${year} asdasdasd`;
}

getYear();