//import "babel-polyfill";
import {bootstrap} from 'zaitun';
//import devTool from 'zaitun/devTool/devTool';

 import {mainCom}  from './mainCom';
 import Counter from './Counter';

const routes=[
    {path:"/counter", component:Counter},
    {path:'/counterList/:times/:msg', loadComponent:()=>System.import('./CounterList')},
    {path:'/todos', loadComponent:()=>System.import('./todos/todos')},
    {path:'/formExample', loadComponent:()=>System.import('./FormExample')},
    {path:'/gridExample', loadComponent:()=>System.import('./GridExample'), cache:true},
    {path:'/dispute', loadComponent:()=>System.import('./dispute/disputeCom'), cache:true},
    {path:'/animation', loadComponent:()=>System.import('./Animation')},
  
  ];
bootstrap({
  containerDom:'#app',
  mainComponent:mainCom,  
  routes:routes,
  activePath:'todos',
  //devTool:devTool
});

// if (DEVELOPMENT) {
// 	if (module.hot) {
// 		module.hot.accept();
// 	}
// }
