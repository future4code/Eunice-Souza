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
exports.createProduct = void 0;
const Productor_1 = require("../../classes/Productor");
const Ticket_1 = require("../../classes/Ticket");
const ProductDataBase_1 = require("../../data/products/ProductDataBase");
const IdGenerator_1 = require("../../services/IdGenerator");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, price, origin, destination } = req.body;
        const id = new IdGenerator_1.IdGenerator().execute();
        const database = new ProductDataBase_1.ProductDataBase();
        const newProduct = origin && destination
            ? new Ticket_1.Ticket(id, name, description, price, origin, destination)
            : new Productor_1.Product(id, name, description, price);
        yield database.createProduct(newProduct);
        res.status(201).send({ product: newProduct });
    }
    catch (err) {
        res.status(500).send({ message: err.massage });
    }
});
exports.createProduct = createProduct;
//# sourceMappingURL=createProduct.js.map