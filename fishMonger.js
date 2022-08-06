const { menuItems } = require("./fishingBoat.js")
/*
fishmonger buys exactly 10 inexpensive fish...if less than 10 he does not buy
loop through output of boatinventory with a for..of statement,
use an if statement to filter objects with amounts equal to or greater than 10,
use an else if statement to filter items with a price greater than 7.50
filter fish with price less than 5.00
set amount of each fish returned equal to 10
*/

const fishSelection = () => {
    let newArray = [

    ]
    return newArray
}
let newArray = fishSelection()

const mongerInventory = (fishPurchase) => {
    for (let item of menuItems) {
        if (item.amount >= 10 && item.price <= 7.50) {
                item.amount = 10
                newArray.push(item)
                
            
        }
    }
    return newArray
}
const purchasedFish = mongerInventory(menuItems)
    

    module.exports = { purchasedFish }