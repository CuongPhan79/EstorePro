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

    // PRODUCT
    'POST /api/v1/backend/product/add': { controller: 'backend/product/ProductController', action: 'add' },
    'GET /api/v1/backend/product/get/:id': { controller: 'backend/product/ProductController', action: 'get' },
    'GET /api/v1/backend/product/get': { controller: 'backend/product/ProductController', action: 'get' },
    'PATCH /api/v1/backend/product/edit/:id': { controller: 'backend/product/ProductController', action: 'edit' },
    'GET /api/v1/backend/product/search': { controller: 'backend/product/ProductController', action: 'search' },
    'GET /api/v1/backend/product/search2': { controller: 'backend/product/ProductController', action: 'search2' },
    'PATCH /api/v1/backend/product/trash/:ids': { controller: 'backend/product/ProductController', action: 'trash' },
    'PATCH /api/v1/backend/product/delete/:id': { controller: 'backend/product/ProductController', action: 'delete' },

    // SUPPERLIER
    'POST /api/v1/backend/supplier/add': { controller: 'backend/supplier/SupplierController', action: 'add' },
    'GET /api/v1/backend/supplier/get/:id': { controller: 'backend/supplier/SupplierController', action: 'get' },
    'PATCH /api/v1/backend/supplier/edit/:id': { controller: 'backend/supplier/SupplierController', action: 'edit' },
    'GET /api/v1/backend/supplier/search': { controller: 'backend/supplier/SupplierController', action: 'search' },
    'PATCH /api/v1/backend/supplier/trash/:ids': { controller: 'backend/supplier/SupplierController', action: 'trash' },
    'PATCH /api/v1/backend/supplier/delete/:id': { controller: 'backend/supplier/SupplierController', action: 'delete' },

    //IMPORT
    'GET /api/v1/backend/import/seacrh': { controller: 'backend/import/ImportController', action: 'search' },
    
    'POST /api/v1/backend/import/add': { controller: 'backend/import/ImportController', action: 'add' },
}
