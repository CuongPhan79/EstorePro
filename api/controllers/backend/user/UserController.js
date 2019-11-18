const ErrorService = require('../../../../config/errors');
module.exports = {
    add: async (req, res) => {
        sails.log.info("================================ UserController.add => START ================================");
        // GET ALL PARAMS
        const params = req.allParams();
        // CHECK INFO USER
        if (!params.firstName || !params.firstName.trim().length) {
          return res.badRequest(ErrorService.USER_FIRSTNAME_REQUIRED);
        }
        if (!params.lastName || !params.firstName.trim().length) {
            return res.badRequest(ErrorService.USER_LASTNAME_REQUIRED);
        }
        if (!params.emailAddress || !params.emailAddress.trim().length) {
            return res.badRequest(ErrorService.USER_EMAIL_REQUIRED);
        }
        if (!params.dateOfBirth || !params.dateOfBirth.trim().length) {
        return res.badRequest(ErrorService.USER_DATEOFBIRTH_REQUIRED);
        }
        if (!params.phone || !params.phone.trim().length) {
        return res.badRequest(ErrorService.USER_PHONE_REQUIRED);
        }
        if (!params.address || !params.address.trim().length) {
          return res.badRequest(ErrorService.USER_ADDRESS_REQUIRED);
        }
        //CHECK DUPLICATE EMAIL & PHONE
        const email = await User.findOne({ emailAddress: params.emailAddress });
        if (email) return res.ok({message: 'Email đã tồn tại'});
        const phone = await User.findOne({ phone: params.phone });
        if (phone) return res.ok({message: 'Số điện thoại đã tồn tại'});
        // PREPARE DATA
        const newData = {
            firstName: params.firstName,
            lastName: params.lastName,
            emailAddress: params.emailAddress,
            dateOfBirth: params.dateOfBirth,
            phone: params.phone,
            address:params.address
        };
        newData.password = await sails.helpers.passwords.hashPassword('123456');
        // ADD NEW DATA 
        const newUser = await UserService.add(newData);
        // RETURN DATA
        return res.ok(newUser);
    },
    edit: async (req, res) => {
        sails.log.info("================================ UserController.edit => START ================================");
        let params = req.allParams();
        if (!params.id) return res.badRequest(ErrorService.ERR_NOT_FOUND);
        if (params.password != params.passwordConfirm) return res.ok(ErrorService.PASSWORD_IS_NOT_MATCH);
        let data = {
            firstName: params.firstName,
            lastName: params.lastName,
            emailAddress: params.emailAddress,
            birthday: params.birthday,
            phone: params.phone,
            address:params.address
        };
        if (params.password) {
          data.password = await sails.helpers.passwords.hashPassword(params.password);
        }
        // //If the phone number already exists
        // let duplicatephone = await UserService.get({ phone: params.phone });
        // if (duplicatephone)  {
        //   if(duplicatephone.id != params.id){
        //     return res.ok(ErrorMessages.PHONE_IS_EXISTED);
        //   }
        // }
        //ALWAYS CHECK  OBJECT EXIST BEFORE UPDATE
        let user = UserService.get({ id: params.id });
        if (!user) return res.notFound(ErrorService.USER_NOT_FOUND);
        //UPDATE DATA
        let editObj = await UserService.edit({ id: params.id }, data);
        return res.ok(editObj);
    },
    get: async (req, res) => {
        sails.log.info("================================ ProductTypeController.get => START ================================");
        // GET ALL PARAMS
        const params = req.allParams();
        if (!params.id) {
          return res.badRequest(ErrorService.SUPPLIER_ID_REQUIRED);
        }
        const dataObj = await UserService.get({
          id: params.id
        });
        if (!dataObj) {
          return res.notFound();
        }
        // RETURN DATA TITLE
        return res.json(dataObj);
    },
    search: async (req, res) => {
        sails.log.info("================================ UserController.search => START ================================");
        let params = req.allParams();
        let title = params.search ? params.search.value : null;
        let draw = (params.draw) ? parseInt(params.draw) : 1;
        let limit = (params.length) ? parseInt(params.length) : null;
        let skip = (params.start) ? parseInt(params.start) : null;
        let sort = null;
        //find only active status
        let where = {
            userType: 1
        };
        //IF TITLE !='' => SEARCH STRING
        if (typeof title === "string" && title.length > 0) {
          where = {
            or: [
              {
                lastName: {
                  contains: title
                },
              }
            ]
          };
        }
        //END IF TITLE
        let arrObjUser = await UserService.find(where, limit, skip, sort);
        //RESPONSE
        let resUser = [];
        for (let user of arrObjUser) {
            let path = "/images/avatar.png";
            let fullName = "";
            fullName =
                `<div class="d-flex align-items-center">
                    <img src="${path}" alt="profile" class="img-sm rounded-circle">
                    <h6>${user.firstName} ${user.lastName}</h6>
                    </div>`;
            if (user.avatar && user.avatar.trim().length) {
                fullName =
                `<div class="d-flex align-items-center">
                    <img src="${user.avatar}" width="50px"  class="img-sm rounded-circle">
                    <h6>${user.fullName}</h6>
                    </div>`;
                
            }
            let tmpData = {};
            tmpData.name = fullName;
            tmpData.emailAddress = user.emailAddress;
            tmpData.birthday = user.birthday;
            tmpData.phone = user.phone;
            tmpData.address = user.address;
            tmpData.tool = await sails.helpers.renderRowAction(user);
            resUser.push(tmpData);
        };
        //END RESPONSE
        let totalUser = await UserService.count(where);
        return res.ok({ draw: draw, recordsTotal: totalUser, recordsFiltered: totalUser, data: resUser });
    }
}