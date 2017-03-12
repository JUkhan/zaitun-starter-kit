/** @jsx html */

import {h, html} from 'zaitun';

import mycounter from './Counter';

const Counter=new mycounter();

const ADD=Symbol('add');
const REMOVE=Symbol('remove');
const RESET=Symbol('reset');
const UPDATE=Symbol('counterAction');

export default class CounterList{
    
    init(dispatch, routeParams){
        console.log(routeParams);        
        let times = 0, counters=[];
        if(routeParams!==undefined){
            times=+routeParams.times
            for(let i=0;i<times; i++){
                counters.push({id: i, counter: Counter.init()});
            }
        }
        return {nextId: times, counters}; 
    }   
    view({model, dispatch}){
        return <div classNames="card card-outline-secondary mb-3 text-center">
                    <div classNames="card-block">
                          <button classNames="btn btn-primary btn-sm" on-click={[dispatch,{type:ADD}]}>Add</button>&nbsp;
                          <button classNames="btn btn-primary btn-sm" on-click={[dispatch, {type:RESET}]}>Reset</button>
                          <hr/>
                          <div>{ model.counters.map(item => <this.CounterItem item={item} dispatch={dispatch} />) }</div>
                    </div>
                </div>
    }
    CounterItem({item, dispatch}){
        return <div key={item.id} style={({paddingBottom:'10px'})}>
                <button classNames="btn btn-primary btn-sm" on-click={ [dispatch, {type:REMOVE, id:item.id}] }>Remove</button>&nbsp;
                <Counter model={item.counter} dispatch={ action => dispatch({type:UPDATE, id:item.id, action:action})  } />
              </div>;
    }
    update(model, action){
        switch (action.type) {
            case ADD:
                const newCounter = {id: model.nextId, counter: Counter.init() };
                return {
                    counters  : [...model.counters, newCounter],
                    nextId    : model.nextId + 1
                };               
             case UPDATE:
                return {
                    nextId: model.nextId,
                    counters:model.counters.map(item=>
                    item.id !== action.id ?
                    item : {...item, counter:Counter.update(item.counter, action.action)}
                    )
                }
            case RESET:
                return{
                    ...model,
                    counters:model.counters.map(item=>{item.counter=Counter.init();return item;})
                }
            case REMOVE:               
                return {...model, counters: [...model.counters.filter(it=>it.id!==action.id)]};   
            default:
                return model;
        }
    }
}
