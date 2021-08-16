const Router = require('@koa/router');
const router = new Router();
const wol = require('wake_on_lan');
const device_list_path = process.env.DEV_PATH || './devices.json';
const devices = require(device_list_path);

router.get('/wol/:dev', async (ctx, next) => {
  const dev = ctx.params.dev;
  if (dev && devices[dev]) {
    try {
      await wol.wake(devices[dev]);
      ctx.body = `Sending magic packet to ${dev}`;
    } catch (err) {
      ctx.body = 'Something wrong';
    }
  } else {
    ctx.body = 'Device not found';
  }
});

module.exports = router;
