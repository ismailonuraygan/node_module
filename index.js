const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();

app.listen(3000, ()=> console.log('server is running...'));

router.get('/', ctx => ctx.body = '<h1>Ilk sayfaya hosgeldiniz</h1>');
router.get('/index', ctx => ctx.body = '<h1>Index sayfasina hosgeldiniz</h1>');
router.get('/hakkimda', ctx => ctx.body = '<h1>Hakkimda sayfasina hosgeldiniz</h1>');
router.get('/Iletisim', ctx => ctx.body = '<h1>Iletisim sayfasina hosgeldiniz</h1>');

//app.use(ctx => ctx.body = 'Hello World');
app.use(router.routes()).use(router.allowedMethods());