'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = {};
  config.static = {
    gzip: true,
  };
  config.cluster = {
    listen: {
      port: 80,
      hostname: '0.0.0.0',
    // path: '/var/run/egg.sock',
    },
  };

  config.name = 'xu_blog';

  config.description = '基于cnode的个人博客';

  config.site_logo = '/public/images/xu1.png';

  config.site_icon = '/public/images/xu.png';

  // debug 为 true 时，用于本地调试
  config.debug = true;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '18958016564';

  config.host = 'http://www.shadowvip.com';

  config.session_secret = 'xu_secret'; // 务必修改

  // add your config here
  config.middleware = [ 'locals', 'authUser', 'blockUser', 'errorPage', 'errorHandler' ];

  config.authUser = {
    enable: true,
    match: '/',
  };

  // 是否允许直接注册（否则只能走 github 的方式）
  config.allow_sign_up = false;

  // cdn host，如 http://cnodejs.qiniudn.com
  config.site_static_host = process.env.EGG_SITE_STATIC_HOST || ''; // 静态文件存储域名

  config.mini_assets = process.env.EGG_MINI_ASSETS || false;

  // 版块
  config.tabs = [[ 'life', '生活' ], [ 'technology', '技术' ]];

  // RSS配置
  config.rss = {
    title: '言午之家',
    link: 'http://www.shadowvip.com',
    language: 'zh-cn',
    description: '许的个人博客',
    // 最多获取的RSS Item数量
    max_rss_items: 50,
  };

  // 下面两个配置都是文件上传的配置

  // 7牛的access信息，用于文件上传
  config.qn_access = {
    accessKey: 'your access key',
    secretKey: 'your secret key',
    bucket: 'your bucket name',
    origin: 'http://your qiniu domain',
    // 如果vps在国外，请使用 http://up.qiniug.com/ ，这是七牛的国际节点
    // 如果在国内，此项请留空
    uploadURL: 'http://xxxxxxxx',
  };

  // 文件上传配置
  // 注：如果填写 qn_access，则会上传到 7牛，以下配置无效
  config.upload = {
    path: path.join(__dirname, '../app/public/upload/'),
    url: '/public/upload/',
  };

  config.view = {
    defaultViewEngine: 'ejs',
    mapping: {
      '.html': 'ejs',
    },
  };

  config.ejs = {
    layout: 'layout.html',
  };

  config.avatars_allow_hostname = [
    'avatars0.githubusercontent.com',
    'avatars1.githubusercontent.com',
    'avatars2.githubusercontent.com',
    'avatars.githubusercontent.com',
    'www.gravatar.com',
    'gravatar.com',
    'www.google-analytics.com',
  ];

  config.auth_cookie_name = 'node_club';
  config.admins = {
    nanjixiong218: true,
  };
  config.whiteusers = { // 白名单用户，可以发布主题
    nanjixiong218: true,
    boydxu: true,
  };

  config.siteFile = {
    '/favicon.ico': '/public/images/xu.png',
  };

  // database
  config.redis = {
    client: {
      host: process.env.EGG_REDIS_HOST || '127.0.0.1',
      port: process.env.EGG_REDIS_PORT || 6379,
      password: process.env.EGG_REDIS_PASSWORD || '',
      db: process.env.EGG_REDIS_DB || '0',
    },
  };

  /**
   * @see http://mongodb.github.io/node-mongodb-native/2.2/api/Db.html#createCollection
   */
  config.mongoose = {
    url: process.env.EGG_MONGODB_URL || 'mongodb://127.0.0.1:27017/egg_cnode',
    options: {
      server: { poolSize: 20 },
    },
  };

  // passport
  config.passportGithub = {
    key: process.env.XU_PASSPORT_GITHUB_CLIENT_ID || 'test',
    secret: process.env.XU_PASSPORT_GITHUB_CLIENT_SECRET || 'test',
  };

  config.passportLocal = {
    usernameField: 'name',
    passwordField: 'pass',
  };

  // 邮箱配置
  config.mail_opts = {
    host: 'smtp.126.com',
    port: 25,
    auth: {
      user: 'club@126.com',
      pass: 'club',
    },
    ignoreTLS: true,
  };

  config.alinode = {
    // 从 `Node.js 性能平台` 获取对应的接入参数
    appid: process.env.XU_ALINODE_APPID || '123',
    secret: process.env.XU_ALINODE_SECRET || '123',
  };

  config.topic = {
    perDayPerUserLimitCount: 10,
  };

  config.list_topic_count = 20;

  // 每个 IP 每天可创建用户数
  config.create_user_per_ip = 1000;

  config.search = 'local'; // 'google', 'baidu', 'local'

  config.security = {
    csrf: {
      ignore: '/api/*/*',
    },
  };

  config.default_page = 1;
  config.default_limit = 20;

  return config;
};
