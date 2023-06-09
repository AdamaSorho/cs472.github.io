class Product {
  constructor(name, price, image, quantity, id = null) {
    this.id = id ? id : ++counter;
    this.name = name;
    this.price = price;
    this.image = image;
    this.quantity = quantity;
  }

  save() {
    dbProducts.push(this);

    return this;
  }

  edit() {
    const index = dbProducts.findIndex((user) => user.id === this.id);

    if (index === -1) throw "Product doesn't exist!";

    if (this.quantity == 0) dbProducts.splice(index, 1);
    else dbProducts.splice(index, 1, this);

    return this;
  }

  static getAll() {
    return dbProducts;
  }

  static findById(id) {
    const product = dbProducts.find((product) => product.id == id);

    if (product === undefined) throw "Product doesn't exist!";

    return product;
  }

  static delete(id) {
    const index = dbProducts.findIndex((product) => product.id == id);

    if (index === -1) throw "Product doesn't exist!";

    const product = dbProducts[index];
    dbProducts.splice(index, 1);

    return product;
  }
}

let counter = 0;
let dbProducts = [
  new Product("NodeJs", 9.99, "images/nodejs.png", 8),
  new Product("ReactJs", 19.99, "images/reactjs.png", 5),
  new Product("Angular", 29.99, "images/angular.png", 13),
];

module.exports = Product;
