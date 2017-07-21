//import "babel-polyfill";
import {bootstrap} from 'zaitun';
import devTool from 'zaitun/devTool/devTool';

 import {mainCom}  from './mainCom';
 import Counter from './Counter';

const routes=[
    {path:"/counter", cache:true, cacheStrategy:'session', component:Counter},
    {path:'/counterList/:times/:msg',cache:true, loadComponent:()=>System.import('./CounterList')},
    {path:'/todos', cache:true, loadComponent:()=>System.import('./todos/todos')},
    {path:'/formExample', cache:true, loadComponent:()=>System.import('./FormExample')},
    {path:'/gridExample', loadComponent:()=>System.import('./GridExample')},
    {path:'/dispute', loadComponent:()=>System.import('./dispute/disputeCom')},
    {path:'/animation', loadComponent:()=>System.import('./Animation')},
  
  ];
bootstrap({
  containerDom:'#app',
  mainComponent:mainCom,  
  routes:routes,
  activePath:'todos',
  devTool:devTool,
  cacheStrategy:'defult'
});

// if (DEVELOPMENT) {
// 	if (module.hot) {
// 		module.hot.accept();
// 	}
// }
