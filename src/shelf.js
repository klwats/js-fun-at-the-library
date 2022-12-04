function shelfBook(book, shelfName) {
   if (shelfName.length < 3) {
    return shelfName.unshift(book)
   } 
}
  
  function unshelfBook(book, shelfName) {
    for (var i = 0; i < shelfName.length; i++) {
      if (book === shelfName[i].title) {
    return shelfName.splice(i, 1)
  }
    }
  }

  function listTitles(shelfName) {
    var titles = []
    for (var i = 0; i < shelfName.length; i++) {
      titles.push(shelfName[i].title)
    }
    return titles.join(', ')
  }


  
  function searchShelf(shelfName, title) {
  for (var i = 0; i < shelfName.length; i++) {
    if (shelfName[i].title === title) {
     return true 
    } 
    }
    return false
  }
  
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};







