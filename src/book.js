function createTitle(title) {
  return `The ${title}`
}
function buildMainCharacter(name, age, pronouns) {
    var character = 
    {
      name: name,
      age: age,
      pronouns: pronouns
    }
    return character
}
function saveReview(review, reviewsCollection) {
  
  if (reviewsCollection.includes(review) === false) {
    reviewsCollection.push(review)
  }
}

function calculatePageCount(title) {
return title.length * 20
}
function writeBook(title, character, genre) {
 var book = {
  title: title,
  mainCharacter: character,
  pageCount: calculatePageCount(title),
  genre: genre
 }
 return book
}
function editBook(book) {
book.pageCount = book.pageCount * 0.75
return book
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}