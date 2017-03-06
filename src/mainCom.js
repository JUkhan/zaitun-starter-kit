/** @jsx html */

import {html, Router} from 'zaitun';

const CHILD = Symbol('CHILD');
export class mainCom{
    init(){
        return {};
    }
    view({model, dispatch}){
        return <div>       
        <h3>Root component</h3>
        <div>{Router.CM.child.view({model:model.child, dispatch:action=>dispatch({type:CHILD, childAction:action})})}</div>
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
}