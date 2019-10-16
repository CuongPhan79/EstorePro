module.exports = {
    attributes: {
      title: {
        type: 'string',
        required: true
      },
      code: {
        type: 'string',
        required: true,
        unique: true
      },
      description: {
        type: 'string',
      },
      status: {
        type: 'number',
      },
    }
  };
  