Zaitun 
========
A light weight javascript framework with time-travelling debugger, inspired by Elm Architecture, snabbdom, snabbdom-jsx
## Installation

```sh
git clone https://github.com/JUkhan/zaitun-starter-kit quickstart
cd quickstart
npm install
npm run dev
Browse http://localhost:8080
For Production(windows)
set NODE_ENV=production
npm run build
```
## The Basic Pattern
The logic of every Zaitun component will break up into three cleanly separated parts:

- init - the state of your component
- view - a way to view your state as HTML
- update - a way to update your state

This pattern is so reliable that I always start with the following skeleton and fill in details for my particular case.
```javascript
class Component{
    init(){
    }
    view(model, action){
    }
    update({model, dispatch}){
    }
}
```
That is really the essence of The Zaitun. We will proceed by filling in this skeleton with increasingly interesting logic.
## Example 1 : a basic counter
The counter component is defined in its own module ‘counter.js’
```javascript
/** @jsx html */
import {h, html} from 'zaitun';
class Counter{ 
    init(){
        return {count:0}
    }
    view({model, dispatch}){
        return <div>
            <button on-click={[dispatch,{type:'INC'}]}>+</button>
            <button on-click={[dispatch,{type:'DEC'}]}>-</button>
            <b>&nbsp;{model.count}</b>
            </div>
    }
    update(model, action){
        switch (action.type) {
            case 'INC': return {count:model.count+1}
            case 'DEC': return {count:model.count-1}          
            default:
                return model
        }
    }
}
export default Counter;
```
> Zaitun uses [snabbdom](https://github.com/snabbdom/snabbdom)  for producing Html chunk. So you can use markup function h(..) or [snabbdom-jsx](https://github.com/yelouafi/snabbdom-jsx) for view

The counter component is defined by the following properties
- Model : {count:0}
- View : provides the user with 2 buttons in order to increment/decrement a counter , and a text that shows the current count.
- Update : sensible to 2 actions : INC and DEC that increments or decrements the counter value..

The first thing to note is that the view/update are both pure functions, they have no dependency on any external environment besides their input. The counter component itself doesn’t hold any state or variable, it just describes how to construct a view from a given state, and how to update a given state with a given action. Thanks to its purity, the counter component can be easily plugged into any environment that is able to supply it with its dependencies : a state  and an action.

Second note, the ‘[dispatch, action]’ expression on the click event listener for each button. We are translating the raw user event (mouse click) into a meaningful action to our program (Increment or Decrement). Using ES6 symbols is better than raw strings (avoids collisions in action names).
## Run the Counter component -  'main.js'
```javascript
import {bootstrap} from 'zaitun';
import Counter from './counter';
 bootstrap({
  containerDom:'#app',
  mainComponent:Counter
});
```
## Set time-travelling debugger - 'main.js'
```javascript
import {bootstrap} from 'zaitun';
import devTool from 'zaitun/devTool/devTool';
import Counter from './counter';
 bootstrap({
  containerDom:'#app',
  mainComponent:Counter,
  devTool:devTool
});
```
 To see how our component can be tested; here is an example using the ‘tape’ testing library
 ```
import test from 'tape';
import Counter from './counter';
const counterCom=new Counter();
test('counter update function', (assert) => {
    
  var state = {count:10};
  state = counterCom.update(state, {type: 'INC'});
  assert.equal(state.count, 11);

  state = counterCom.update(state.count, {type: 'DEC'});
  assert.equal(state.count, 10);

  assert.end();
});
 ```

inprogress...

