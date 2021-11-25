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
exports.getAllProducts = void 0;
const ProductDataBase_1 = require("../data/products/ProductDataBase");
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const database = new ProductDataBase_1.ProductDataBase();
        const result = yield database.getAllProducts();
        res.status(200).send({ result });
    }
    catch (err) {
        res.status(500).send({ massage: err.massage });
    }
});
exports.getAllProducts = getAllProducts;
//# sourceMappingURL=getAllProducts.js.map