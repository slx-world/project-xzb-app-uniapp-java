
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#F8F8F8","onReachBottomDistance":50,"navigationBar":{"titleText":"小智帮","type":"default","titleColor":"#000000"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"小智帮-服务端","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"3.8.4","entryPagePath":"pages/login/user","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/login/user","meta":{"isQuit":true,"isEntry":true,"navigationBar":{"titleText":"登录","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/index/index","meta":{"pullToRefresh":{"support":true,"color":"#ff3333","style":"default","height":"50px"},"navigationBar":{"titleText":"小智帮","style":"custom","type":"default"},"enablePullDownRefresh":true,"isNVue":false}},{"path":"pages/serviceSkill/index","meta":{"navigationBar":{"titleText":"选择服务技能","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/getOrder/index","meta":{"navigationBar":{"titleText":"接单设置","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/serviceRange/index","meta":{"navigationBar":{"titleText":"请选择工作地点","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/city/index","meta":{"navigationBar":{"titleText":"选择服务城市","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/setting/index","meta":{"navigationBar":{"titleText":"基础配置","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/pickup/index","meta":{"navigationBar":{"titleText":"派件","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/orderInfo/index","meta":{"navigationBar":{"titleText":"订单详情","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/cancel/index","meta":{"navigationBar":{"titleText":"取消原因","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/serveRecord/index","meta":{"navigationBar":{"titleText":"服务记录","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/delivery/index","meta":{"navigationBar":{"titleText":"消息","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/my/index","meta":{"navigationBar":{"titleText":"我的","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/evaluate/index","meta":{"navigationBar":{"titleText":"我的评价","style":"custom","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  