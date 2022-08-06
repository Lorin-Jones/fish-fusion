const { purchasedFish } = require("./fishMonger.js")
/*
Chef specifies maximum price per fish
if monger has fish equal to price or less, chef buys 50% of inventory
create an empty array for chefpurchase
okay, so you'll wanna change fishmonger function so that it returns the less than or equal to 750
then, you'll want to specify an if clause here that checks the monger purchasedFish array for items making chefs price
create an empty array to hold the fish that the chef buys then set the output to a variable.
the function will use string concatonation to loop through the array and print the name of the fish.
if chefprice === true, amount = 
chef creates three different meals per fish, soup, grilled dinner, and sandwich.
    tuna soup
    tuna sandwich
    grilled tuna
if (item.price <= chefPrice)
*/
const menuFish = () => {
    const chefSpecial = [

    ]
    return chefSpecial
}
let chefSpecial = menuFish()

const chefPurchases = (mongerFish, chefPrice) => {
    for (let fish of purchasedFish) {
        if (fish.price <= chefPrice) {
            fish.amount = fish.amount * .5
            chefSpecial.push(fish)
        }
    }
    return chefSpecial
}
let chefsFinalSelection = chefPurchases(purchasedFish, 5)


const fishMenu = (fishSpecial) => {
    for (let special of chefsFinalSelection) {
        console.log(`<h1>Menu</h1>
        <article class="menu">
            <h2>${special.species}</h2>
            <section class="menu__item">${special.species} Soup</section>
            <section class="menu__item">${special.species} Sandwich</section>
            <section class="menu__item">Grilled ${special.species}</section>
        </article>`)
    }
    return fishSpecial
}
fishMenu(chefsFinalSelection)


