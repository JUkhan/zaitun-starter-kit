/** @jsx html */

import {html, Router} from 'zaitun';
import {juForm} from './ui/juForm';
import appService from './appService';


import {Dispatcher, Actions} from './effect';

const CHILD = Symbol('CHILD');

export class mainCom{
    constructor(){
        this.popup=new juForm();
        
    }
    afterViewRender(){
       appService.setPopup(this.popup);

       //set actions to the Router.CM. so that we can use it
       //through out the app
       const action$=new Actions();
       action$.subscribe(action=>{});       
       Router.CM.action$=action$;

       //cache: resolve circular dependency
        Router.CM.json_parse=(data)=>{
            console.log('parse',data);
            return window.CircularJSON.parse(data);
        };
        Router.CM.json_stringify=data=>{
             console.log('json_stringify',data);
            return window.CircularJSON.stringify(data);
        }
    }
    init(){
        return {
            popup:{
                options:this.getPopupOptions(),
                data:{msg:<b>Message goes here</b>}
            },
            menu: [
                { path: 'counter', text: 'Counter' },
                { path: 'counterList/5/test', text: 'Counter List' },
                { path: 'todos', text: 'Todos' },
                { path: 'animation', text: 'Animation' },
                { path: 'formExample', text: 'Form Exmple' },
                { path: 'gridExample', text: 'Grid Example' },
                { path: 'dispute', text: 'Dispute Exception' },
                
            ]
        };
    }
    view({model, dispatch}){        
        return <div>       
             <this.TopMenu model={model.menu} />
            <div>{Router.CM.child.view({model:model.child, dispatch:action=>dispatch({type:CHILD, childAction:action})})}</div>
            {this.popup.view({model:model.popup, dispatch})}
        </div>
    }
    TopMenu({ model }) {
        return <nav classNames="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
            <a classNames="navbar-brand" href="#/counter">Zaitun</a>
            <div classNames="collapse navbar-collapse" id="navbarCollapse">
                <ul classNames="navbar-nav mr-auto">
                    {model.map(nav => <li classNames="nav-item" class={{ active: Router.activeRoute.navPath === nav.path }}><a classNames="nav-link" href={'#/' + nav.path}>{nav.text}</a></li>)}
                </ul>

            </div>
        </nav>
    }   
    update(model, action){        
        switch (action.type) {            
            case CHILD:
               return{...model,child:Router.CM.child.update(model.child, action.childAction)};
               
            default:
            return model;
        }
    }

    getPopupOptions(){
        return {
            viewMode:'popup',
            title:'Popup Title',
            name:'alert-popup',
            size:'sm',            
            inputs:[
                {type:'vnode', vnode:model=>model.data.msg}                                
            ]
        }
    }
}