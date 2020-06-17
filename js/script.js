
/**THE GLOBAL CONSTANTS THAT DICTATE THE ENTIRE APP - AKA STATE  */
let basePrice = 10;
let ingredients = [   
    { name: 'Pepperoni', price: 1, active:true, className:"pep", buttonClass:".btn-pepperoni"},
    { name: 'Mushrooms', price: 1, active:false, className:"mushroom", buttonClass:".btn-mushrooms"},
    { name: 'Green Peppers', price: 1, active:true, className:"green-pepper", buttonClass:".btn-green-peppers" },
    { name: 'White sauce', price: 3, active:false, className:"sauce-white", buttonClass:".btn-sauce"},
    { name: 'Gluten-free crust', price: 5,active:true, className:"crust", buttonClass:".btn-crust"},
]


//**DOES EVERYTHING BASED ON INGREDIENTS ARRAY ^^^^ */
function renderEverything(){
    let total = basePrice;
    let menu = ``

    ingredients.forEach(ingredient => {
        let toppings =  document.querySelectorAll(`.${ingredient.className}`)
        if(ingredient.active){ //If true 
       
            toppings.forEach(topping => {//make visible 
                topping.style.visibility = 'visible'
            })
            total += ingredient.price //Adds to total
            document.querySelector(ingredient.buttonClass).classList.add('active')
            menu += `<li>$${ingredient.price} ${ingredient.name}</li>`
     
        } else { //make it hidden
     
            toppings.forEach(topping => {
                topping.style.visibility = 'hidden'
            })
            document.querySelector(ingredient.buttonClass).classList.remove('active')
        }    
    })

    document.querySelector('.panel.price ul').innerHTML = menu
    document.querySelector('#total').innerText = `$${total}`
}



/**LISTEN FOR CLICK ON BUTTONS */
let buttons = document.querySelectorAll('.btn')
buttons.forEach(button => {
    button.onclick = (event) => {
        let top =  ingredients.find(ing => ing.name === button.innerText) //Finding the object who's name is equal to the button's text
        top.active = !top.active  //Change object to have oppositve active 
        renderEverything()
    }
})



renderEverything() //On page load 
