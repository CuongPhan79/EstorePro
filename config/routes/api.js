module.exports.api = {
    /* API WEB  */
    'PUT /api/v1/backend/entrance/login': { action: 'backend/entrance/login' },

    // PRODUCT TYPE
    'POST /api/v1/backend/productType/add': { controller: 'backend/productType/ProductTypeController', action: 'add' },
    'GET /api/v1/backend/productType/get/:id': { controller: 'backend/productType/ProductTypeController', action: 'get' },
    'PATCH /api/v1/backend/productType/edit/:id': { controller: 'backend/productType/ProductTypeController', action: 'edit' },
    'GET /api/v1/backend/productType/search': { controller: 'backend/productType/ProductTypeController', action: 'search' },
    'PATCH /api/v1/backend/productType/trash/:ids': { controller: 'backend/productType/ProductTypeController', action: 'trash' },
    'PATCH /api/v1/backend/productType/delete/:id': { controller: 'backend/productType/ProductTypeController', action: 'delete' },

    // BRAND
    'POST /api/v1/backend/brand/add': { controller: 'backend/brand/BrandController', action: 'add' },
    'GET /api/v1/backend/brand/get/:id': { controller: 'backend/brand/BrandController', action: 'get' },
    'PATCH /api/v1/backend/brand/edit/:id': { controller: 'backend/brand/BrandController', action: 'edit' },
    'GET /api/v1/backend/brand/search': { controller: 'backend/brand/BrandController', action: 'search' },
    'PATCH /api/v1/backend/brand/trash/:ids': { controller: 'backend/brand/BrandController', action: 'trash' },
    'PATCH /api/v1/backend/brand/delete/:id': { controller: 'backend/brand/BrandController', action: 'delete' },
}
