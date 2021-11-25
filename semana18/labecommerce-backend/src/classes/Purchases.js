"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purchase = void 0;
class Purchase {
    constructor(userId, productId, quantity, total) {
        this.userId = userId;
        this.productId = productId;
        this.quantity = quantity;
        this.total = total;
        if (typeof userId !== "string")
            throw new Error("type of 'id' must be a 'string'");
        if (typeof productId !== "string")
            throw new Error("type of 'id' must be a 'string'");
        if (typeof quantity !== "number")
            throw new Error("type of 'id' must be a 'string'");
        if (typeof total !== "number")
            throw new Error("type of 'id' must be a 'string'");
    }
}
exports.Purchase = Purchase;
//# sourceMappingURL=Purchases.js.map