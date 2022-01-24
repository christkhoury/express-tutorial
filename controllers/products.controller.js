const product1 = {
    name: 'iphone', 
    model:'x',
    serialNumber:6787656,
    id:0
}
const product2 = {
    name: 'samsung', 
    model:'s20',
    serialNumber:23567,
    id:1
}
const product3 = {
    name: 'tecno', 
    model:'spark',
    serialNumber:2356667,
    id:2
}
const products = [product1,product2,product3]

exports.getAll = (req, res) => {
    res.send(products)
}

exports.productsbyid = (req, res) => {
    const item =  products.find(element => element.id == req.params.id)
    res.send(item)
}

