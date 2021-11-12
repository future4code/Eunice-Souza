import { Product } from "../../classes/Productor";
import { Ticket } from "../../classes/Ticket";
import { BaseDataBase } from "../BaseDataBase";

export class ProductDataBase extends BaseDataBase {

    private static tableName = 'labecommerce_products'

    // tratar os dados que esta sendo enviado do dataBase.
    private static toProduct = (input: any): Product => {
        return input.origin && input.destination
            ? new Ticket(input.id, input.name, input.descripition, input.price, input.origin, input.destination)
            : new Product(input.id, input.name, input.descripition, input.price)
    }

    createProduct = async (product: Product) => {
        await BaseDataBase
            .connection(ProductDataBase.tableName)
            .insert(product)
    }

    getAllProducts = async () => {
        const result = await BaseDataBase
            .connection(ProductDataBase.tableName)

        return result.map(this.toProduct)

    }
}