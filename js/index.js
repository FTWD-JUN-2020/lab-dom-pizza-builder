// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: false,
  greenPeppers: true,
  whiteSauce: true,
  glutenFreeCrust: true
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
  renderReceipt()
}
renderEverything();  //On load... 






function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}


function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}



function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.green-pepper').forEach(topping => {
    if (state.greenPeppers) {
      topping.style.visibility = 'visible';
    } else {
      topping.style.visibility = 'hidden';
    }
  });
}


function renderWhiteSauce() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.sauce-white').forEach(topping => {
    if (state.whiteSauce) {
      topping.style.visibility = 'visible';
    } else {
      topping.style.visibility = 'hidden';
    }
  });
}


function renderGlutenFreeCrust() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.crust-gluten-free').forEach(topping => {
    if (state.glutenFreeCrust) {
      topping.style.visibility = 'visible';
    } else {
      topping.style.visibility = 'hidden';
    }
  });
}


function renderButtons() {}


function renderPrice() {
  //$16 = pepperoni + base + crust 

  let total = basePrice //$10 
  let list = ``

  for(key in state){ //Loop thru state

    if(state[key]){ //is Pepperoni, Mushrooms, etc. true??? 

      total += ingredients[key].price
      //$10 += ingredients[pepperoni].price,

      list += `<li>${ingredients[key].price} ${ingredients[key].name}</li>`

    }
  }

  document.querySelector("#total").innerHTML = '$' + total
  document.querySelector('.panel.price ul').innerHTML = list
}




function renderReceipt() {}



// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
let pepperoniButton = document.querySelector('.btn.btn-pepperoni')
pepperoniButton.addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  if(state.pepperoni) {
    pepperoniButton.className = 'btn btn-pepperoni active'
  } else {
    pepperoniButton.className = 'btn btn-pepperoni'
  }
  renderEverything();
});







// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
let mushroomButton = document.querySelector('.btn.btn-mushrooms')
mushroomButton.addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  
  if(state.mushrooms){
    mushroomButton.className = 'btn btn-mushrooms active'
  } else {
    mushroomButton.className = 'btn btn-mushrooms '
  }
  
  renderEverything();
});






let greenPepperButton = document.querySelector('.btn.btn-green-peppers')
greenPepperButton.addEventListener('click', () => {

  state.greenPeppers = !state.greenPeppers;

  if(state.greenPeppers){
    greenPepperButton.className = 'btn btn-green-peppers active'
  } else {
    greenPepperButton.className = 'btn btn-green-peppers'
  }

  renderEverything();
});


// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
let whiteSauceButton = document.querySelector('.btn.btn-sauce')
whiteSauceButton.addEventListener('click', () => {
    state.whiteSauce = !state.whiteSauce;

  if(state.whiteSauce){
    whiteSauceButton.className = 'btn btn-sauce active'
  } else {
    whiteSauceButton.className = 'btn btn-sauce'
  }


  renderEverything();
});


// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
let glutenButton = document.querySelector('.btn.btn-crust')
glutenButton.addEventListener('click', () => {
    state.glutenFreeCrust = !state.glutenFreeCrust;

  if(state.glutenFreeCrust){
    glutenButton.className = 'btn btn-crust active'
  } else {
    glutenButton.className = 'btn btn-crust'
  }


  renderEverything();
});



