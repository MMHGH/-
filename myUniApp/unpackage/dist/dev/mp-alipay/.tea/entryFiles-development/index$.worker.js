if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/toast?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../components/uni-grid/uni-grid?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-badge/uni-badge?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-grid-item/uni-grid-item?hash=7e6745dc72a97e3d1fb379393a0ce6d7093a6953');
require('../../node-modules/mescroll-uni/mescroll-uni?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/index/index?hash=3c86824d20db2b3198c2d212a0bda9d2be44b109');
require('../../pages/list/list?hash=6ab2d1324703055fbb38603d68df79fbaa63e351');
require('../../pages/list/detail/detail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/tips/tips?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}