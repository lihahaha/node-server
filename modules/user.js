// 引入mysql的配置文件
const db = require('../config/db');

// 引入sequelize对象
const Sequelize = db.sequelize;

// 引入数据表模型
const User = Sequelize.import('../schema/user');
User.sync({force: false}); //自动创建表

class UserModel {
    /**
     * 创建用户模型
     * @param data
     * @returns {Promise<*>}
     */
    static async createUser(data){
        return await User.create({
            uid: data.uid, //uid
            userName: data.userName,  //用户名
            userDes: data.userDes,  //用户描述
            userTel: data.userTel, //用户手机号
            userCard: data.userCard,  //用户身份证号
            userLevel: data.userLevel  //用户等级
        });
    }

    /**
     * 查询用户信息
     * @param id 文章ID
     * @returns {Promise<Model>}
     */
    static async getArticleDetail(id){
        return await Article.findOne({
            where:{
                id
            }
        });
    }
}

module.exports = UserModel;