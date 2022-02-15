
const categorie1 = {
    name: 'Mercedes',
    model: 'cls' ,
    vin: 'WKN320492',
    production: 2010,
    color:'grey',
    carfax: true ,
    id:0
}
const categorie2 = {
    name: 'peugeot',
    model: '207' ,
    vin: 'WKN320g492',
    production: 2012,
    color:'white',
    carfax: true,
    id:1
}
const categorie3 = {
    name: 'seat',
    model: 'ibiza' ,
    vin: 'WKN3204vr92',
    production: 2012,
    color:'white',
    carfax: false,
    id:2
}
const categorie4 = {
    name: 'chevrolet',
    model: 'cobalt' ,
    vin: 'WKN32HS0492',
    production: 2017,
    color:'grey',
    carfax: true,
    id:3
}
const categories = [categorie1,categorie2,categorie3,categorie4]

exports.allcategories = (req, res) => {

    const carfaxBox = []
    const carfaxBoz = []

    // for each element in the users array
    categories.forEach(element => {
       if(element.carfax === true){
           //if user is spam, it will be pushed to the spamBox
           carfaxBox.push(element)
       } else {
           carfaxBoz.push(element)
       }
    })
    res.send(categoriesgit)
}
categories.forEach(element => {
    console.log(element.color)
})

exports.getAll = (req, res) => {
    res.send(categories)
}

exports.categoriesbyid =(req, res) => {
  const categorie = categories.find(element => element.id == req.params.id)
  res.send(categorie)
}
