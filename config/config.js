/**
 * 配置文件
 */
//发布配置
const production = {

    //服务器端口
    SERVER_PORT : 3000,

    //REDIS配置
    REDIS: {
        host: 'localhost',            
        port: 6379,
        password: "abcd",
        maxAge: 3600000
    },

    //MYSQL数据库配置
    MYSQL: {
        host: "localhost",
        user: "my_user",
        password: "my_pw",
        port: "3306",
        database: "my_data",
        supportBigNumbers: true,
        multipleStatements: true,
        timezone: 'utc'
    }

}

//开发配置
const development = {

    //服务器端口
    SERVER_PORT : 3000,

    //REDIS配置
    REDIS: {
        host: 'localhost',            
        port: 6379,
        password: "lj123456",
        maxAge: 3600000
    },
    // 环境
    environment: 'dev',
    // MYSQL
    database: {
        dbName: 'mysql',
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'lj123456'
    },
    // jwt
    security: {
        secretKey: "secretKey",
        // 过期时间 1小时
        expiresIn: 60 * 60
    },
    wx: {
        appId: '',
        appSecret: '',
        loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
    }
}

const config = development

module.exports = config