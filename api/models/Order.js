module.exports = {
    attributes: {
      code: {
        type: 'string',
        required: true,
        unique: true
      },
      listProduct: {
        type: 'json',
        defaultsTo: []
        },
       note: {
        type: 'string'
       },
       price: {
        type: 'json',
        defaultsTo: 
          {
            "totalPrice": 0,
            "discount": 0,
            "pay": 0
          }
       },
       date: {
        type: 'string',
        required: true
       },
       type: {
        type: 'number',
       },
       status: {
        type: 'number',
       },
       createdBy: {
        model: 'user'
      },
      buyer: {
        model: 'customer'
      },
    }
  };
  