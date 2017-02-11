/** @jsx html */

import {html} from 'zaitun';

const INC=Symbol('inc');
const DEC=Symbol('dec');


export default class Counter{ 
    init(){       
        return {data:0, msg:''}
    }   
    view({model, dispatch}){
         return <span>
                    <button classNames="btn btn-primary btn-sm" on-click={ [dispatch, {type:INC}] }>+</button>
                    <button classNames="btn btn-primary btn-sm" on-click={ [dispatch, {type:DEC}] }>-</button>
                    <button on-click={[this.lazyInc, dispatch]}>+ (Async)</button>
                    <b> Count : {model.data} {model.msg}</b>
                </span>             
                ;
    }   
    update(model, action){
        
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
    lazyInc(dispatch){
        dispatch({type:'lazy'});
        setTimeout(function() {
            dispatch({type:INC});
        }, 1000);
    }
}