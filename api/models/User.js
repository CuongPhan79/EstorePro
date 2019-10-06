

module.exports = {
  attributes: {
    emailAddress: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200,
      description: 'The email address for this user.',
      example: 'example@zinimedia.com'
    },
    phone: {
      type: 'string',
      maxLength: 11,
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      description:
        'Securely hashed representation of the user\'s login password.',
      protect: true,
      example: '2$28a8eabna301089103-13948134nad'
    },
    firstName: {
      type: 'string',
      required: true,
      description: 'The fist of the student\'s name',
      example: 'Phan',
      maxLength: 255
    },
    lastName: {
      type: 'string',
      required: true,
      description: 'The fist of the student\'s name',
      example: 'Cuong',
      maxLength: 255
    },
    birthday: {
      type: 'string',
      example: 'DD/MM/YYYY'
    },
    address: {
      type: 'string',
      description: 'The User address',
      example: 'abc street, ward 5, Ho Chi Minh City'
    },
    userType: {
      type: 'number',
    },

  }
};
