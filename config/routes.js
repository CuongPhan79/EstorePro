/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */


var routes_api = require('./routes/api');

module.exports.routes = Object.assign(routes_api.api, {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/


  'GET /backend/login': { action: 'backend/entrance/view-login', locals: { layout: 'backend/layouts/layout-guest' } },
  'GET /backend/dashboard': { action: 'backend/dashboard/index'},
  'GET /backend/logout': { action: 'backend/account/logout' },
  'GET /backend/account/profile': { action: 'backend/account/view-edit-profile' },
  // PRODUCT TYPE
  'GET /backend/productType/index': { action: 'backend/productType/index' },

  //BRAND
  'GET /backend/brand/index': { action: 'backend/brand/index'},

  //PRODUCT
  'GET /backend/product/index': { action: 'backend/product/index'},

  //SUPPLIER
  'GET /backend/supplier/index': { action: 'backend/supplier/index'},
  
  //SUPPLIER
  'GET /backend/import/index': { action: 'backend/import/index'},

  //IMPORT
  'GET /backend/import/form': {action: 'backend/import/form'},

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


});
