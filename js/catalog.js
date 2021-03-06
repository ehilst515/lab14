/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for(var x = 0; x < Product.allProducts.length; x++){
    var selectElementOption = document.createElement('option');
    selectElementOption.textContent = `${Product.allProducts[x].name}`
    selectElement.appendChild(selectElementOption);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {


  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  var selectedItem = document.getElementById('items')
  var selectedItemValue = selectedItem.options[selectedItem.selectedIndex].text;

  // TODO: get the quantity
  var selectedQuant = document.getElementById('quantity').value;


  // TODO: using those, add one item to the Cart
 
  cartValueQuantity.push(selectedQuant)
}

var cartValueQuantity = [];

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  console.log('Update counter function');
  // var itemCountValue = document.getElementById('itemCount');
  for(var i = 0; i < cartValueQuantity.length - 1; i++){
    var itemCountSum = parseInt(cartValueQuantity[i]) + parseInt(cartValueQuantity[i + 1]);
    console.log(itemCountSum);
  }
    var sumPar = document.createElement('p')
    var sumElment = document.getElementById('itemCount');
    sumPar.textContent = itemCountSum; 
    sumElment.appendChild(sumPar);
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();