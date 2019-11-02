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

    //PRODUCT
    PRODUCT_CODE_REQUIRED: { code: 'PRODUCT_CODE_REQUIRED', message: 'code product is required' },
    PRODUCT_TITLE_REQUIRED: { code: 'PRODUCT_TITLE_REQUIRED', message: 'title product is required' },
    PRODUCT_ID_REQUIRED: { code: 'PRODUCT_ID_REQUIRED', message: 'id product is required'},

    //SUPPLIER
    SUPPLIER_NAME_REQUIRED: { code: 'SUPPLIER_NAME_REQUIRED', message: 'name supplier is required' },
    SUPPLIER_EMAIL_REQUIRED: { code: 'SUPPLIER_EMAIL_REQUIRED', message: 'email supplier is required' },
    SUPPLIER_PHONE_REQUIRED: { code: 'SUPPLIER_PHONE_REQUIRED', message: 'phone supplier is required' },
    SUPPLIER_ADDRESS_REQUIRED: { code: 'SUPPLIER_ADDRESS_REQUIRED', message: 'address supplier is required' },
    SUPPLIER_ID_REQUIRED: { code: 'SUPPLIER_ID_REQUIRED', message: 'id product is required'},
}
module.exports = ErrorService;