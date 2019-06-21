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
        user: "root",
        password: "l123456",
        port: "3306",
        database: "nodesample",
        supportBigNumbers: true,
        multipleStatements: true,
        timezone: 'utc'
    }

}

//开发配置
const development = {

    //服务器端口
    SERVER_PORT : 3002,

    //REDIS配置
    REDIS: {
        host: 'localhost',            
        port: 6379,
        password: "lj123456",
        maxAge: 3600000
    },

    //MYSQL数据库配置
    MYSQL: {
        host: "localhost",
        user: "root",
        password: "l123456",
        port: "3306",
        database: "nodesample",
        supportBigNumbers: true,
        multipleStatements: true,
        timezone: 'utc'
    },

    // jwt验证
    jwt_secret: 'ddff0a63e06816ddd7b7d2e2ebc1e40205',

    // 微信
    wx: {
        appId: '',
        appSecret: '',
        loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
    }
}

const config = development

module.exports = config