module.exports = function(){
    return {
        products: [
            { id: 1, name: "Samsung S5", price:800, imageUrl: '1.jpg', description:'Android'},
            { id: 2, name: "Samsung S6", price:900, imageUrl: '2.jpg', description:'iyi'},
            { id: 3, name: "Samsung S7", price:1000, imageUrl: '3.jpg', description:'Android kötü'},
            { id: 4, name: "Samsung S8", price:200, imageUrl: '4.jpg', description:'Android a'},
            { id: 5, name: "Samsung S9", price:3000, imageUrl: '5.jpg', description:'Android olur'},
            { id: 6, name: "Samsung S10", price:4000, imageUrl: '6.jpg', description:'Android fena'},

        ],
        categories: [
            { id: 1, name:"Telefon"},
            { id: 2, name:"Bilgisayar"},
            { id: 3, name:"Elektronik"}
        ],
        orders: []

    }
}