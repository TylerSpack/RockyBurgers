let foodDrinks = document.getElementById('foodDrinks');
let desserts = document.getElementById('desserts');
let foodDrinkMenu = document.getElementById('foodDrinkMenu');
let dessertsMenu = document.getElementById('dessertsMenu');
foodDrinks.addEventListener('click', function(){
    dessertsMenu.style.display = 'none';
    foodDrinkMenu.style.display = 'flex';
})
desserts.addEventListener('click', function(){
    foodDrinkMenu.style.display = 'none';
    dessertsMenu.style.display = 'flex';
})

// if (window.width <= 700){
//     let foodMenuItems = document.getElementsByClassName("menuSection");
//     for (var i = 0; i < foodMenuItems.length; i++){
//         foodMenuItems.style.display
//     }
// }

