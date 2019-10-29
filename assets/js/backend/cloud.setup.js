/**
 * cloud.setup.js
 *
 * Configuration for this Sails app's generated browser SDK ("Cloud").
 *
 * Above all, the purpose of this file is to provide endpoint definitions,
 * each of which corresponds with one particular route+action on the server.
 *
 * > This file was automatically generated.
 * > (To regenerate, run `sails run rebuild-cloud-sdk`)
 */
Cloud.setup({
    methods: {
        //LOGIN
        "login": {
            "verb": "PUT",
            "url": "/api/v1/backend/entrance/login",
            "args": ["emailAddress", "password"]
        },
        //-------------------------LOGIN---------------- 
        
        //PRODUCTTYPE
        "addProductType": {
            "verb": "POST",
            "url": "/api/v1/backend/productType/add",
            "args": ["code","title","description", "status"]
        },
        "getProductType": {
            "verb": "GET",
            "url": "/api/v1/backend/productType/get/:id",
            "args": ["id"]
        },
        "editProductType": {
            "verb": "PATCH",
            "url": "/api/v1/backend/productType/edit/:id",
            "args": ["id"]
        },
        "trashProductType": {
            "verb": "PATCH",
            "url": "/api/v1/backend/productType/trash/:ids",
            "args": ["id"]
        },
        //-------------------------PRODUCTTYPE----------------

        //BRAND
        "addBrand": {
            "verb": "POST",
            "url": "/api/v1/backend/brand/add",
            "args": ["title","description", "status"]
        },
        "getBrand": {
            "verb": "GET",
            "url": "/api/v1/backend/brand/get/:id",
            "args": ["id"]
        },
        "editBrand": {
            "verb": "PATCH",
            "url": "/api/v1/backend/brand/edit/:id",
            "args": ["id"]
        },
        "trashBrand": {
            "verb": "PATCH",
            "url": "/api/v1/backend/brand/trash/:ids",
            "args": ["id"]
        },
        //-------------------------BRAND---------------- 
        
        //PRODUCT
        "addProduct": {
            "verb": "POST",
            "url": "/api/v1/backend/product/add",
            "args": ["code","title","description", "status", "brandbox", "entryPrice", "price", "productTypebox"]
        },
        "getProduct": {
            "verb": "GET",
            "url": "/api/v1/backend/product/get/:id",
            "args": ["id"]
        },
        "editProduct": {
            "verb": "PATCH",
            "url": "/api/v1/backend/product/edit/:id",
            "args": ["id"]
        },
        "trashProduct": {
            "verb": "PATCH",
            "url": "/api/v1/backend/product/trash/:ids",
            "args": ["id"]
        },
        //-------------------------PRODUCTTYPE----------------
    }
})