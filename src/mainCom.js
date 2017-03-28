/** @jsx html */

import {html, Router} from 'zaitun';
import {juForm} from './ui/juForm';
import appService from './appService';

const CHILD = Symbol('CHILD');

export class mainCom{
    constructor(){
        this.popup=new juForm();
        
    }
    onViewInit(){
       appService.setPopup(this.popup);
    }
    init(){
        return {
            popup:{
                options:this.getPopupOptions(),
                data:{msg:<b>Message goes here</b>}
            }
        };
    }
    view({model, dispatch}){        
        return <div>       
            <h3>Root component</h3>
            <div>{Router.CM.child.view({model:model.child, dispatch:action=>dispatch({type:CHILD, childAction:action})})}</div>
            {this.popup.view({model:model.popup, dispatch})}
        </div>
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