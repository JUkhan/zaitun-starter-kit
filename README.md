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
## Example

```javascript
/** @jsx html */
import {bootstrap, html} from 'zaitun';

class Counter{ 
    init(){
        return {count:0}
    }
    view({model, dispatch}){
        return <div>
            <button on-click={[dispatch,{type:'inc'}]}>+</button>
            <button on-click={[dispatch,{type:'dec'}]}>-</button>
            <b>&nbsp;{model.count}</b>
            </div>
    }
    update(model, action){
        switch (action.type) {
            case 'inc': return {count:model.count+1}
            case 'dec': return {count:model.count-1}          
            default:
                return model
        }
    }
}
bootstrap({
    containerDom:'#app',
    mainComponent:Counter
})
```
That's everything!

When writing this program from scratch, I always start by taking a guess at the model. To make a counter, we at least need to keep track of a number that is going up and down. So let's just start with that!
```javascript
init(){
    return {count:0}
}
```
Now that we have a model, but how do we actually make some HTML and show it on screen? Zaitun using [snabbdom](https://github.com/snabbdom/snabbdom) and  [snabbdom-jsx](https://github.com/yelouafi/snabbdom-jsx) for producing Html chunk.
```javascript
view({model, dispatch}){
        return <div>
            <button on-click={[dispatch,{type:'inc'}]}>+</button>
            <button on-click={[dispatch,{type:'dec'}]}>-</button>
            <b>&nbsp;{model.count}</b>
            </div>
    }
```
One thing to notice is that our view function is producing a Html value. This means that it is a chunk of HTML that can produce Action values. And when you look at the definition, you see the on-click attributes are set to dispatch out 'inc' and 'dec' values. These will get fed directly into our update function, driving our whole app forward.

```javascript
    update(model, action){
        switch (action.type) {
            case 'inc': return {count:model.count+1}
            case 'dec': return {count:model.count-1}          
            default:
                return model
        }
    }
```
I definitely know the user will be able to increment and decrement the counter. The action describes these capabilities as data. Important! From there, the update function just describes what to do when you receive one of these actions.

If you get an Increment action, you increment the model. If you get a Decrement action, you decrement the model. Pretty straight-forward stuff.

This pattern is the essence of The Zaitun Framework. Every example we see from now on will be a slight variation on this basic pattern: init, view, update.


