const priceSmall = 3
const priceMedium = 5
const priceLarge = 9

var small = prompt(" Hoeveel kleine pizza's wil u? ", " ");
var medium = prompt(" Hoeveel medium pizza's wil u? ", " ");
var large = prompt(" Hoeveel grote pizza's wil u? ", " ");

var totalSmall = priceSmall * small
var totalMedium = priceMedium * medium
var totalLarge = priceLarge * large
var totalPrice = totalsmall + totalmedium + totallarge

console.log("U heeft " + small + " kleine pizza's besteld voor " + totalsmall + " Euro. ");
console.log("U heeft " + medium + " medium pizza's besteld voor " + totalmedium + " Euro. ");
console.log("U heeft " + large + " grote pizza's besteld voor " + totallarge + " Euro. ");
console.log("In totaal kost uw bestelling " + totalprice + " Euro. ");