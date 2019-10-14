module.exports.api = {
    /* API WEB  */
    'PUT /api/v1/backend/entrance/login': { action: 'backend/entrance/login' },
    'GET /api/v1/backend/productType/search': { controller: 'backend/productType/AlbumController', action: 'search' },

    // PRODUCT TYPE
    'POST /api/v1/backend/productType/add': { controller: 'backend/courseSession/ProductTypeController', action: 'add' },
    'GET /api/v1/backend/productType/get/:id': { controller: 'backend/courseSession/CourseSessionController', action: 'get' },
    'PATCH /api/v1/backend/productType/edit/:id': { controller: 'backend/courseSession/CourseSessionController', action: 'edit' },
    'GET /api/v1/backend/productType/search': { controller: 'backend/courseSession/ProductTypeController', action: 'search' },
    'POST /api/v1/backend/productType/trash/:ids': { controller: 'backend/courseSession/CourseSessionController', action: 'trash' },
    'PATCH /api/v1/backend/productType/delete/:id': { controller: 'backend/courseSession/CourseSessionController', action: 'delete' },
}