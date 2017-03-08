/** @jsx html */
import {bootstrap, html, h} from 'zaitun';

const CounterCom={ 
    init(){
        return {count:0}
    },   
    view({model, dispatch}){
        return <div>
            <button on-click={[dispatch,{type:'inc'}]}>+</button>
            <button on-click={[dispatch,{type:'dec'}]}>-</button>
            <b>&nbsp;{model.count}</b>
            </div>
    },
    update(model, action){
        switch (action.type) {
            case 'inc': return {count:model.count+1}
            case 'dec': return {count:model.count-1}          
            default:
                return model
        }
    }
}
//const CounterCom=new Counter();
const Pointer={
    init(){
        return {x:CounterCom.init(), y:CounterCom.init()}
    },
    view({model, dispatch}){
        return <div>
          <h1>(x, y)={model.x.count}, {model.y.count} </h1>
          X<CounterCom model={model.x} dispatch={action=>dispatch({type:'x',payload:action})}/>
          Y<CounterCom model={model.y} dispatch={action=>dispatch({type:'y',payload:action})}/>
        </div>
    },
    update(model, action){
        switch (action.type) {
            case 'x':
                return {...model, x:CounterCom.update(model.x, action.payload)}
            case 'y':
                return {...model, y:CounterCom.update(model.y, action.payload)}
            default:
               return model
        }
    }
}

bootstrap({
    containerDom:'#app',
    mainComponent:Pointer
})