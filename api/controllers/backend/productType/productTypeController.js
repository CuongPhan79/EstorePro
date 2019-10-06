// module.exports = {
//   search: async (req, res) => {
//     sails.log.info("================================ CourseSessionController.search => START ================================");
//     let params = req.allParams();
//     let status = params.status ? parseInt(params.status) : -1;
//     let title = params.search ? params.search.value : null;
//     let draw = (params.draw) ? parseInt(params.draw) : 1;
//     let limit = (params.length) ? parseInt(params.length) : null;
//     let skip = (params.start) ? parseInt(params.start) : null;
//     let sort = null;
//     if(params.order)
//     {
//       let objOrder = {};
//       objOrder[params.columns[params.order[0].column].data] = params.order[0].dir ;
//       sort = [objOrder];
//     }
    
//     //find only active status
//     let where = {
//       status: status
//     };
//     //IF TITLE !='' => SEARCH STRING
//     if (typeof title === "string" && title.length > 0) {
//       where = {
//         or: [
//           {
//             title: {
//               contains: title
//             },
//             status: status
//           }
//         ]
//       };
//     }
//     //END IF TITLE
//     let schoolObj = await SchoolService.get({ id: req.me.school });
//     let strSchoolCode = schoolObj.schoolCode + "_";
//     let arrObjCourseSessions = await CourseSessionService.find(where, limit, skip, sort);
//     //RESPONSE COURSE SESSIONS
//     let resCourseSessions = []; 
//     for (let courseSession of arrObjCourseSessions) {
//       let tmpData = {};
//       tmpData.id = '<input class="js-checkbox-item" type="checkbox" value="' + courseSession.id + '">';
//       tmpData.code = courseSession.code.replace(strSchoolCode, "");
//       tmpData.tool = await sails.helpers.renderRowAction(courseSession);
//       tmpData.title = courseSession.title;
//       if (courseSession.status == 0) {
//         tmpData.status = '<label class="badge badge-warning">Lưu tạm</label>';
//       } else if (courseSession.status == 3) {
//         tmpData.status = '<label class="badge badge-danger">Thùng rác</label>';
//       } else {
//         tmpData.status = '<label class="badge badge-success">Sử dụng</label>';
//       }
//       tmpData.startTime = moment(courseSession.startTime, "YYYY-MM-DD").format(dateFormat);
//       tmpData.endTime = moment(courseSession.endTime, "YYYY-MM-DD").format(dateFormat);
//       resCourseSessions.push(tmpData);
//     };
//     //END RESPONSE COURSE SESSIONS
//     let totalCourseSession = await CourseSessionService.count(where);
//     return res.ok({ draw: draw, recordsTotal: totalCourseSession, recordsFiltered: totalCourseSession, data: resCourseSessions });
//   }
// };
