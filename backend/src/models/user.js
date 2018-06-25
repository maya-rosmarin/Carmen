// var moment = require('moment');
//
// const user = (sequelize, DataTypes) => {
//   const User = sequelize.define('user', {
//     username: {
//       type: DataTypes.STRING,
//       unique: true,
//     },
//     createdAt: {
//       defaultValue: sequelize.literal('NOW()'),
//     },
//     updatedAt: {
//       defaultValue: sequelize.literal('NOW()'),
//     },
//   });
//   return User;
// }
//
// exports.preSave = function (req, res, args, next) {
//     if (args.name == 'user') {
//         var now = moment(new Date()).format('YYYY-MM-DD hh:mm:ss'),
//             record = args.data.view.user.records[0].columns;
//         if (args.action == 'insert') {
//             record.created_at = now;
//             record.updated_at = now;
//         }
//         else if (args.action == 'update') {
//             record.updated_at = now;
//         }
//     }
//     next();
// }
//
// module.exports = user;
