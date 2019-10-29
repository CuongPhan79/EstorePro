const ErrorService = require('../../../../config/errors');
module.exports = {
  add: async (req, res) => {
    sails.log.info("================================ ProductController.add => START ================================");
    // GET ALL PARAMS
    const params = req.allParams();
    // CHECK NAME & CODE
    if (!params.code || !params.code.trim().length) {
      return res.badRequest(ErrorService.PRODUCT_CODE_REQUIRED);
    }
    if (!params.title || !params.title.trim().length) {
    return res.badRequest(ErrorService.PRODUCT_TITLE_REQUIRED);
    }
    //CHECK DUPLICATE CODE
    const code = await ProductService.get({ code: params.code });
    if (code) return res.ok({message: 'Mã sản phẩm bị trùng'});
    // PREPARE DATA
    const newData = {
    code: params.code,
    title: params.title, // REQUIRED
    status: params.status, // REQUIRED
    entryPrice: params.entryPrice,
    price: params.price,
    brand: params.brandbox,
    productType: params.productTypebox,
    number: 0,
    description: params.description,
    };
    // ADD NEW DATA 
    const newProduct = await ProductService.add(newData);
    // RETURN DATA
    return res.ok(newProduct);
  },
  get: async (req, res) => {
    sails.log.info("================================ ProductController.get => START ================================");
    // GET ALL PARAMS
    const params = req.allParams();
    if (!params.id) {
      return res.badRequest(ErrorService.PRODUCT_ID_REQUIRED);
    }
    // QUERY & CHECK DATA TITLE
    const dataObj = await ProductService.get({
      id: params.id
    });
    if (!dataObj) {
      return res.notFound();
    }
    // RETURN DATA TITLE
    return res.json(dataObj);
  },
  edit: async (req, res) => {
    sails.log.info("================================ ProductController.edit => START ================================");
    // GET ALL PARAMS
    const params = req.allParams();
    // CHECK TITLE & CODE
    if (!params.code || !params.code.trim().length) {
      return res.badRequest(ErrorService.PRODUCT_CODE_REQUIRED);
    }
    if (!params.title || !params.title.trim().length) {
      return res.badRequest(ErrorService.PRODUCT_ID_REQUIRED);
    }
    //CHECK DUPLICATE CODE
    const checkCode = await ProductService.get({ code: params.code });
    if (checkCode) {
      if(checkCode.id != params.id) {
        return res.ok({message: 'Mã sản phẩm bị trùng'});
      }
    }
    // CHECK DATA
    const dataObj = await ProductService.get({ id: params.id });
    if (!dataObj) return res.notFound();
    // PREPARE DATA 
    const editData = {
      code: params.code,
      title: params.title, // REQUIRED
      status: params.status, // REQUIRED
      entryPrice: params.entryPrice,
      price: params.price,
      brand: params.brandbox,
      productType: params.productTypebox,
      description: params.description,
    }
    // UPDATE DATA TITLE
    const editObj = await ProductService.edit({ id: params.id }, editData);
    // RETURN DATA TITLE
    return res.json(editObj);
  },
   trash: async (req, res) => {
    sails.log.info("================================ ProductController.trash => START ================================");
    let params = req.allParams();
    if (!params.ids) return res.badRequest(ErrorService.PRODUCT_ID_REQUIRED);
    // Call constructor with custom options:
    let data = { status: sails.config.custom.STATUS.TRASH };
    let ids = params.ids;
    if(params.ids.indexOf(';') != -1) {
      ids = ids.split(';');
    }
    if (typeof (ids) == 'object') {
      for (var i = 0; i < ids.length; i++) {
        let dataObj = await ProductService.get({ id: ids[i] });
        if (!dataObj) return res.notFound(ErrorTitle.ERR_NOT_FOUND);
        //If status  == 3 => Delete 
        if (dataObj.status == 3) {
          ProductService.del({ id: ids[i] });
        } else {
          await Product.update(ids[i]).set(data);
        }
      }
    }
    else {
      //ALWAYS CHECK  OBJECT EXIST
      let dataObj = await ProductService.get({ id: ids });
      if (!dataObj) return res.notFound(ErrorTitle.ERR_NOT_FOUND);
      //If status Title == 3 => Delete Title
      if (dataObj.status == 3) {
        ProductService.del({ id: ids });
      } else {
        await Product.update(ids).set(data);
      }
    }
    return res.ok();
  },
  search: async (req, res) => {
  sails.log.info("================================ ProductController.search => START ================================");
  let params = req.allParams();
  let status = params.status ? parseInt(params.status) : 1;
  let title = params.search ? params.search.value : null;
  let draw = (params.draw) ? parseInt(params.draw) : 1;
  let limit = (params.length) ? parseInt(params.length) : null;
  let skip = (params.start) ? parseInt(params.start) : null;
  let sort = null;
  if(params.order)
  {
    let objOrder = {};
    objOrder[params.columns[params.order[0].column].data] = params.order[0].dir ;
    sort = [objOrder];
  }
  
  //find only active status
  let where = {
    status: status
  };
  //IF TITLE !='' => SEARCH STRING
  if (typeof title === "string" && title.length > 0) {
    where = {
      or: [
        {
          title: {
            contains: title
          },
          status: status
        }
      ]
    };
  }
  //END IF TITLE
  let arrObjProduct = await ProductService.find(where, limit, skip, sort);
  //RESPONSE
  let resProduct= []; 
  for (let product of arrObjProduct) {
    let tmpData = {};
    tmpData.id = '<input class="js-checkbox-item" type="checkbox" value="' + product.id + '">';
    tmpData.title = product.title;
    tmpData.code = product.code;
    tmpData.productType = product.productType.title ? product.productType.title : '-';
    tmpData.brand = product.brand.title ? product.brand.title : '-';
    tmpData.entryPrice = (product.entryPrice) + ' đ';
    tmpData.price = product.price ? product.price + ' đ': '-';
    tmpData.tool = await sails.helpers.renderRowAction(product);
    tmpData.description = product.description;
    if (product.status == 0) {
      tmpData.status = '<label class="badge badge-warning">Lưu tạm</label>';
    } else if (product.status == 3) {
      tmpData.status = '<label class="badge badge-danger">Thùng rác</label>';
    } else {
      tmpData.status = '<label class="badge badge-success">Sử dụng</label>';
    }
    resProduct.push(tmpData);
  };
  //END RESPONSE
  let totalProduct = await ProductService.count(where);
  return res.ok({ draw: draw, recordsTotal: totalProduct, recordsFiltered: totalProduct, data: resProduct });
  }
}