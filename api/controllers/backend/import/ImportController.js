const ErrorService = require('../../../../config/errors');
module.exports = {
    add: async (req, res) => {
        sails.log.info("================================ BrandController.add => START ================================");
        // GET ALL PARAMS
        const params = req.allParams();
        // CHECK NAME & CODE
        if (!params.code || !params.code.trim().length) {
        return res.badRequest(ErrorService.IMPORT_CODE_REQUIRED);
        }
        if (!params.date || !params.date.trim().length) {
            return res.badRequest(ErrorService.IMPORT_DATE_REQUIRED);
        }
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
            user: req.me.id
        };
        // ADD NEW DATA 
        const newImport = await ImportService.add(newData);
        // RETURN DATA
        return res.ok(newImport);
    }
}