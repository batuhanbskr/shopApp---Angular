module.exports = function(){
    return {
        products: [
            { id: 1, name: "Samsung S5", price:800, imageUrl: '1.png', description:'Android', category:'Telefon'},
            { id: 2, name: "Samsung S6", price:900, imageUrl: '1.png', description:'iyi', category:'Bilgisayar'},
            { id: 3, name: "Samsung S7", price:1000, imageUrl: '1.png', description:'Android kötü', category:'Elektronik'},
            { id: 4, name: "Samsung S8", price:200, imageUrl: '1.png', description:'Android a', category:'Telefon'},
            { id: 5, name: "Samsung S9", price:3000, imageUrl: '1.png', description:'Android olur', category:'Bilgisayar'},
            { id: 6, name: "Samsung S10", price:4000, imageUrl: '1.png', description:'Android fena', category:'Elektronik'},

        ],
        categories: [
            { id: 1, name:"Telefon"},
            { id: 2, name:"Bilgisayar"},
            { id: 3, name:"Elektronik"}
        ],
        orders: []

    }
}