module.exports = {
  search: async (req, res) => {
    sails.log.info("================================ CourseSessionController.search => START ================================");
    let params = req.allParams();
    let status = params.status ? parseInt(params.status) : -1;
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
    let arrObjProductType = await ProductTypeService.find(where, limit, skip, sort);
    //RESPONSE COURSE SESSIONS
    let resProductType = []; 
    for (let productType of arrObjProductType) {
      let tmpData = {};
      tmpData.id = '<input class="js-checkbox-item" type="checkbox" value="' + productType.id + '">';
      tmpData.title = productType.title;
      tmpData.code = productType.code;
      tmpData.tool = await sails.helpers.renderRowAction(productType);
      if (productType.status == 0) {
        tmpData.status = '<label class="badge badge-warning">Lưu tạm</label>';
      } else if (productType.status == 3) {
        tmpData.status = '<label class="badge badge-danger">Thùng rác</label>';
      } else {
        tmpData.status = '<label class="badge badge-success">Sử dụng</label>';
      }
      resProductType.push(tmpData);
    };
    //END RESPONSE COURSE SESSIONS
    let totalProductType = await ProductTypeService.count(where);
    return res.ok({ draw: draw, recordsTotal: totalProductType, recordsFiltered: totalProductType, data: resProductType });
  }
};
