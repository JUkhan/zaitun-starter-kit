/** @jsx html */

import {html, Router} from 'zaitun';
import {EffectSubscription} from './effect';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
const INC=Symbol('inc');
const DEC=Symbol('dec');


export default class Counter{ 
    constructor(){
        this.es=new EffectSubscription();
    }
    init(){               
        return {data:0, msg:''}
    }    
	onViewInit(model, dispatch){
       const lazyEffect=Router.CM.actions$.whenAction('lazy')
        .delay(500)
        .map(ac=>({...ac,type:INC}));
        this.es.addEffect(lazyEffect);
    }    
    canDeactivate(){
        return confirm('Do you want to leave this page?') //promise
    }
    onDestroy(){
        console.log('des');
        this.es.dispose();
    } 	
    view({model, dispatch}){
        this.es.dispatch=dispatch;
         return <span>
                    <button  on-click={ [dispatch, {type:INC}] }>+</button> 
                    <button  on-click={[dispatch,{type:'lazy', dispatch}]}>+ (Async)</button>
                    <b style={{padding:'0 8px',border:'solid 1px red'}}>{model.msg?model.msg:model.data}</b>
                    <button  on-click={ [dispatch, {type:DEC}] }>-</button>
                </span>             
                ;
    }   
    update(model, action){        
        Router.CM.actions$.dispatch(action);
        switch (action.type) {
            case INC:    
               return {data:model.data+1, msg:''};
            case DEC:              
               return {data:model.data-1};
            case 'lazy':
                return {...model, msg:'incrementing...'}
           
            default:
                return model;
        }
    }
    
}