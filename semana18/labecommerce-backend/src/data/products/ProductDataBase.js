"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDataBase = void 0;
const Productor_1 = require("../../classes/Productor");
const Ticket_1 = require("../../classes/Ticket");
const BaseDataBase_1 = require("../BaseDataBase");
class ProductDataBase extends BaseDataBase_1.BaseDataBase {
    constructor() {
        super(...arguments);
        this.createProduct = (product) => __awaiter(this, void 0, void 0, function* () {
            yield BaseDataBase_1.BaseDataBase
                .connection(ProductDataBase.tableName)
                .insert(product);
        });
        this.getAllProducts = () => __awaiter(this, void 0, void 0, function* () {
            const result = yield BaseDataBase_1.BaseDataBase
                .connection(ProductDataBase.tableName);
            return result.map(this.toProduct);
        });
    }
}
exports.ProductDataBase = ProductDataBase;
ProductDataBase.tableName = 'labecommerce_products';
ProductDataBase.toProduct = (input) => {
    return input.origin && input.destination
        ? new Ticket_1.Ticket(input.id, input.name, input.descripition, input.price, input.origin, input.destination)
        : new Productor_1.Product(input.id, input.name, input.descripition, input.price);
};
//# sourceMappingURL=ProductDataBase.js.map