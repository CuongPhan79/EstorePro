const ErrorService = {
    //PRODUCT TYPE
    PRODUCTTYPE_CODE_REQUIRED: { code: 'PRODUCTTYPE_CODE_REQUIRED', message: 'code product type is required' },
    PRODUCTTYPE_TITLE_REQUIRED: { code: 'PRODUCTTYPE_TITLE_REQUIRED', message: 'title product type is required' },
    PRODUCTTYPE_ID_REQUIRED: { code: 'PRODUCTTYPE_ID_REQUIRED', message: 'id product type is required'},
    ERR_NOT_FOUND: { code: 'ERR_NOT_FOUND', message: 'not found'},

    //BRAND
    BRAND_CODE_REQUIRED: { code: 'BRAND_CODE_REQUIRED', message: 'code brand is required' },
    BRAND_TITLE_REQUIRED: { code: 'BRAND_TITLE_REQUIRED', message: 'title brand is required' },
    BRANDID_REQUIRED: { code: 'BRAND_ID_REQUIRED', message: 'id brand is required'},
    ERR_NOT_FOUND: { code: 'ERR_NOT_FOUND', message: 'not found'},

    PRODUCT_CODE_REQUIRED: { code: 'PRODUCT_CODE_REQUIRED', message: 'code product is required' },
    PRODUCT_TITLE_REQUIRED: { code: 'PRODUCT_TITLE_REQUIRED', message: 'title product is required' },
    PRODUCT_ID_REQUIRED: { code: 'PRODUCT_ID_REQUIRED', message: 'id product is required'},
    ERR_NOT_FOUND: { code: 'ERR_NOT_FOUND', message: 'not found'},
}
module.exports = ErrorService;