export class Article {
  name: string;
  sku: string;
  urlImg: number;
  price: number;

  constructor(obj?: any) {
    this.name   = obj && obj.name   ? obj.name : null;
    this.sku    = obj && obj.sku    ? obj.sku : null;
    this.urlImg = obj && obj.urlImg ? obj.urlImg : null;
    this.price  = obj && obj.price  ? obj.price    : null;
  }
}

