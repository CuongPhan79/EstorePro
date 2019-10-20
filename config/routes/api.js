module.exports.api = {
    /* API WEB  */
    'PUT /api/v1/backend/entrance/login': { action: 'backend/entrance/login' },

    // PRODUCT TYPE
    'POST /api/v1/backend/productType/add': { controller: 'backend/productType/ProductTypeController', action: 'add' },
    'GET /api/v1/backend/productType/get/:id': { controller: 'backend/productType/ProductTypeController', action: 'get' },
    'PATCH /api/v1/backend/productType/edit/:id': { controller: 'backend/productType/ProductTypeController', action: 'edit' },
    'GET /api/v1/backend/productType/search': { controller: 'backend/productType/ProductTypeController', action: 'search' },
    'POST /api/v1/backend/productType/trash/:ids': { controller: 'backend/productType/ProductTypeController', action: 'trash' },
    'PATCH /api/v1/backend/productType/delete/:id': { controller: 'backend/productType/ProductTypeController', action: 'delete' },
}
