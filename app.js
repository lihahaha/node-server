const Koa = require('koa')
const app = new Koa()
const onerror = require('koa-onerror')
const cors = require('koa-cors')
const parser = require('koa-bodyparser')
const config = require('./config/config.js');
const session = require('koa-session');
const RedisStore = require('koa2-session-redis');
const InitManager = require('./core/init')
const catchError = require('./middlewares/exception')

// error handler
// onerror(app)

// // logger
// app.use(async (ctx, next) => {
//     const start = new Date()
//     await next()
//     const ms = new Date() - start
//     console.log(`${ctx}`)
//     console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
// })

// app.keys = ['Porschev'];
// const redis_conf = {  
//     key: 'Porschev',
//     maxAge: config.REDIS.maxAge,
//     overwrite: true,
//     httpOnly: true,  
//     rolling: false,
//     sign: true,
//     store: new RedisStore({
//         host: config.REDIS.host,
//         port: config.REDIS.port,    
//         password: config.REDIS.password    
//     })
// };

// app.use(session(redis_conf, app));

// // error-handling
// app.on('error', (err, ctx) => {
//     // console.error('server error', err, ctx)
// });

// // 跨域
// app.use(cors());
// app.use(catchError)
// app.use(parser())
// InitManager.initCore(app)
app.get('/', function (req, res) { 
    res.send('Helloworld\n');
});
app.listen(config.SERVER_PORT, () => {
    console.log(`Starting at port ${config.SERVER_PORT}!`)
});



module.exports = app
