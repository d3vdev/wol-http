const Koa = require('koa');
const app = new Koa();
const port = process.env.PORT || 3000;
const router = require('./router');

app.use(router.routes(), router.allowedMethods());

app.listen(port);
