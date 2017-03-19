/** @jsx html */

import {html} from 'zaitun';

const INC=Symbol('inc');
const DEC=Symbol('dec');


export default class Counter{ 
    init(){
         console.log('init')       
        return {data:0, msg:''}
    }
	onViewInit(model, dispatch){
       console.log('viewInit')
    } 
    canDeactivate(){
        return confirm('Do you want to leave this page?') //promise
    }
    onDestroy(){
        console.log('destroy...')
    } 	
    view({model, dispatch}){
         return <span>
                    <button  on-click={ [dispatch, {type:INC}] }>+</button>                    
                    <button  on-click={[this.lazyInc, dispatch]}>+ (Async)</button>
                    <b style={{padding:'0 8px',border:'solid 1px red'}}>{model.msg?model.msg:model.data}</b>
                    <button  on-click={ [dispatch, {type:DEC}] }>-</button>
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