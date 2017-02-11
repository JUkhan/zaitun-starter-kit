
import {bootstrap} from 'zaitun';
import devTool from 'zaitun/devTool/devTool';

import Counter from './Counter';

bootstrap({
  containerDom:'#app',
  mainComponent:Counter,
  //locationStrategy:'hash',
  //routes:routes,
  //activePath:'/counter',
  //devTool:devTool
});