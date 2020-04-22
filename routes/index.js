const router = require('koa-router')()

const APP_MENU = require('../public/javascripts/menu')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = APP_MENU
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    data: APP_MENU
  }
})

module.exports = router
