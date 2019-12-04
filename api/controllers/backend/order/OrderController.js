const ErrorService = require('../../../../config/errors');
module.exports = {
    add: async (req, res) => {
        sails.log.info("================================ BrandController.add => START ================================");
        // GET ALL PARAMS
        const params = req.allParams();
        // CHECK NAME & CODE
        if (!params.code || !params.code.trim().length) {
        return res.badRequest(ErrorService.ORDER_CODE_REQUIRED);
        }
        if (!params.date || !params.date.trim().length) {
            return res.badRequest(ErrorService.ORDER_DATE_REQUIRED);
        }
        const code = await Order.findOne({ code: params.code });
        if (code) return res.ok({message: 'Mã bán hàng bị trùng'});
        // PREPARE DATA
        let price = {};
        price.totalPrice = params.totalPrice;
        price.discount = params.discountval;
        price.pay = params.totalPrice;
        const newData = {
            code: params.code, // REQUIRED
            listProduct: params.slotItems,
            note: params.description,
            price: price,
            date: params.date,
            createdBy: req.me.id,
            status: 1,
            type: 1//no customer
        };
        // ADD NEW DATA 
        const newOrder = await OrderService.add(newData);
         // MINUS NUMBER PRODUCT AFTER CREATE IMPORT
         for(product of newData.listProduct) {
            let productGet = await Product.findOne({_id: product.product})
            let number = productGet.number;
            let data = {number: number - product.number};
            let minus = await Product.update(product.product).set(data);
        }
        // RETURN DATA
        return res.ok(newOrder);
    }
}