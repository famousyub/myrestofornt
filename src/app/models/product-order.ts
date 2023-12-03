import { Recipe } from "./recipe";

export class ProductOrder {

    product: Recipe;
    quantity: number;

    constructor(product: Recipe, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }

}
