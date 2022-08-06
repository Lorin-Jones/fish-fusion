/*
make a function that contains a variable defined as an object 
in the object, define keys Species, Weight, Price, Amount
it should look like this:
{
    species: fishSpecies,
    weight: fishWeight,
    price: fishPrice,
    amount: fishAmount
}
*/

const boatInventory = () => {
    let menuItems = [
        { id: 1, species: "Halibut", weight: 6, price: 3.55, amount: 30 },
        { id: 2, species: "Mackerel", weight: 3, price: 4.10, amount: 48 },
        { id: 3, species: "Salmon", weight: 5, price: 3.05, amount: 25 },
        { id: 4, species: "Walleye", weight: 2, price: 9.45, amount: 19 },
        { id: 5, species: "Sunfish", weight: 25, price: 5.18, amount: 1 },
        { id: 6, species: "Orange Roughy", weight: 4, price: 6.95, amount: 37 },
        { id: 7, species: "Tuna", weight: 18, price: 8.66, amount: 5 },
        { id: 8, species: "Puffer", weight: 2, price: 9.84, amount: 52 }
    ]
    return menuItems
}
let menuItems = boatInventory()
module.exports = { menuItems }
/*
const inventory = (orders) => {
    for (let menuItem of menuItems) {
        if (menuItem.species === "Salmon") {
            return menuItem
        }
    }
}
console.log(inventory())
*/