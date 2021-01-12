// DOM by ID
const banner = document.getElementById("page-banner")

const bookList = document.getElementById("book-list")
// DOM by Class and Tag
const titles = document.getElementByClassName("title")

const lis = document.getElementByTagName("li")

//lis[0]

/*for(i=0; i < titles.length; i++){
	console.log(titles[i])

}*/

/*Array.from(titles).forEach(function(item){
console.log(item);
})*/

//query selector

const wrap = document.querySelector("#wrapper");

const wmf = document.querySelector("#book-list li:nth-child(2) .name")

const books = document.querySelector("#book-list li.name")

books = document.querySelectorAll("#book-list li.name")

/*Array.from(books).forEach(function(book){
console.log(book);
});*/