export class shoppingCart {
  constructor(private products: Product[] = []) {}

  insertProduct(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }
  amount(): number {
    return this.products.length;
  }

  total(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}

export class Product {
  constructor(
    public name: string,
    public price: number,
  ) {}
}

const product1 = new Product('camisa', 32.1);
const product2 = new Product('camisa2', 32.1);
const product3 = new Product('camisa3', 32.1);
const cart1 = new shoppingCart();
cart1.insertProduct(product1);
cart1.insertProduct(product2);
cart1.insertProduct(product3);
console.log(cart1);
console.log(cart1.amount());
console.log(cart1.total());
