

function createLibrary(name) {
  var library = {
    name: name, 
    shelves: {
      fiction: [],
      fantasy: [],
      nonFiction: []
    }
    
  }
  return library
}

module.exports = {
  createLibrary,
  // addBook,
  // checkoutBook
};