/**
├── schema
    └── user.js
*/
const moment = require('moment');
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        // 用户uid
        uid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true,
            autoIncrement: true,
        },
        // 用户名
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'userName',
        },
        // 用户描述
        userDes: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'userDes'
        },
        // 用户手机号
        userTel: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'userTel'
        },
        // 用户身份证号
        userCard: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'userCard'
        },
        // 用户权限等级
        userLevel: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'userLevel'
        },
        // 创建时间
        createdAt: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        },
        // 更新时间
        updatedAt: {
            type: DataTypes.DATE,
            get() {
                return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
            }
        }
    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true
    })

}
