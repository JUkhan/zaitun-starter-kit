//import "babel-polyfill";
import {bootstrap} from 'zaitun';
//import devTool from 'zaitun/devTool/devTool';

 import {mainCom}  from './mainCom';
 import Counter from './Counter'; 
const routes=[
    {path:"/counter", component:Counter},
    {path:'/counterList', loadComponent:()=>System.import('./CounterList')},
    {path:'/todos', loadComponent:()=>System.import('./todos/todos')},
    {path:'/formExample', loadComponent:()=>System.import('./FormExample'), cache:true}
  ];
bootstrap({
  containerDom:'#app',
  mainComponent:mainCom,  
  routes:routes,
  activePath:'/counter',
  //devTool:devTool
});

if (DEVELOPMENT) {
	if (module.hot) {
		module.hot.accept();
	}
}
