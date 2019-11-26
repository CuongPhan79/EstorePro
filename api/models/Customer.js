module.exports = {
    attributes: {
      firstName: {
        type: 'string',
        required: true
      },
      lastName: {
        type: 'string',
        required: true
      },
      gender: {
        type: 'number',
      },
      emailAddress: {
        type: 'string',
        required: true,
        unique: true,
        isEmail: true,
        maxLength: 200,
        description: 'The email address for this customer.',
        example: 'example@zinimedia.com'
      },
      phone: {
        type: 'string',
        maxLength: 11,
        required: true,
        unique: true
      },
      birthday: {
        type: 'string',
        example: 'YYYY-MM-DD'
      },
      address: {
        type: 'string',
        description: 'The User address',
        example: 'abc street, ward 5, Ho Chi Minh City'
      }
    }
  };
  