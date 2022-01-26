const Menu1 ={
    name:'big tasty',
    number: 1,
    dressing: 'tomatoes, big tasty sauce, onions,lettuce',
    price: '100,000LL',
    Meal: '125,000LL',
    Medium:'add 7,000LL',
    Large:'add 14,000LL',
    id:0

}
const Menu2 ={
    name:'Chicken big mac',
    number: 2,
    dressing: 'Letuce,mayo cheese',
    price: '78,000LL',
    Meal: '95,000LL',
    Medium:'add 7,000LL',
    Large:'add 14,000LL',
    id:1
}

const Menu3 ={
    name:'Mac royal ',
    number: 3,
    dressing: 'tomatoes,Mayo,ketchup, onions,lettuce',
    price: '80,000LL',
    Meal: '105,000LL',
    Medium:'add 7,000LL',
    Large:'add 14,000LL',
    id:2

}
const Menu = [Menu1,Menu2,Menu3]

exports.getthem = (req, res) => {
    res.send(Menu)
}
exports.elementbyid