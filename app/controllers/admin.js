const {Admin} = require('../modules/admin')
const bcrypt = require('bcryptjs')

// data access object
class AdminDao {
    // 创建用管理员
    static async createAdmin(v) {
        const hasAdmin = await Admin.findOne({
            where: {
                email: v.get('body.email'),
                deleted_at: null
            }
        });

        if (hasAdmin) {
            throw new global.errs.Existing('账号已存在');
        }

        const admin = new Admin();
        admin.email = v.get('body.email');
        admin.password = v.get('body.password2');
        admin.nickname = v.get('body.nickname');

        admin.save();
    }

    // 验证密码
    static async verifyEmailPassword(email, plainPassword) {

        // 查询用户是否存在
        const admin = await Admin.findOne({
            where: {
                email
            }
        })

        if (!admin) {
            throw new global.errs.AuthFailed('账号或密码错误')
        }

        // 验证密码是否正确
        const correct = bcrypt.compareSync(plainPassword, admin.password);

        if (!correct) {
            throw new global.errs.AuthFailed('账号或密码错误')
        }

        return admin
    }

    // 查询管理员信息
    static async getAdminInfo(id) {
        const scope = 'bh';
        // 查询管理员是否存在
        const admin = await Admin.scope(scope).findOne({
            where: {
                id
            }
        })

        if (!admin) {
            throw new global.errs.AuthFailed('账号不存在')
        }

        return admin
    }
}

module.exports = {
    AdminDao
}