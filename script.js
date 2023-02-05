function pizzaType(isChorizo){
    return(isChorizo?'Chorizo':'Cheese');
}

console.log(pizzaType(true));
// "Chorizo"
console.log(pizzaType(false));
// "Cheese"