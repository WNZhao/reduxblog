# 概述

本例是学习《深入React技术栈》的简单博客demo，主要目的是学习和深入理解redux的使用，由于使用的是和书中的不同版本的router所以，需要简单了解一下react-router 4.0


## 目录结构

![](filestructure.png)

views文件夹下放着的是所有路由入口页
components下放着的是每个入口页需要的组件、样式及Redux相关的文件

容器组件和展示组件区别主是看是否感知redux，或者说，是否使用connect方法让组件redux的状态树中获取数据

views/HomeRedux.js包含了Home页面所有组件相关的reducer及actionCreator

使用router4 会报一个错误 

> react-router-redux: Cannot read property 'listen' of undefined at syncHistoryWithStore
> 注意安装哪下 https://brunolm.wordpress.com/2017/03/17/migrating-to-react-router-4-with-redux/
> npm i -S history react-router react-router-redux
> import { createBrowserHistory } from 'history';
> react-router最新版本已经支持或参看 https://github.com/supasate/connected-react-router


### Redux Devtools

```bash
npm install --save-dev redux-devtools redux-devtools-log-monitor redux-devtools-dock-monitor
```

1. 创建DevTools.js

```javascript
import React from "react";
import {createDevTools} from "redux-devtools";
import LogMonitor from "redux-devtools-log-monitor";
import DockMonitor from "redux-devtools-dock-monitor";

const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h'
    changePositionKey='ctrl-q'>
    <LogMonitor theme='tomorrow' />
    </DockMonitor>
)

export default DevTools;
```

2. 在compose中，在applyMiddleware()...后面添加 DevTools.instrument() 形如：

```javascript
const finalCreateStore = compose(
    applyMiddleware(ThunkMiddleware),
    //启用带有monitors(监视显示)的DevTools
    DevTools.instrument()
)(createStore);
```
3. 在页面中添加\<DevTools /> 标签

## reducer的复用

如果有A和B两个模块，它们的UI部分相似，些时可以通过配置不同的props来区别它们。那么这种情况下，A和B模块能不能共用一个reducer呢？
答案是**不能**的。

如果共用A调用B也会做同样的处理动作，所以要解决这个问题actionType必须全局唯一的。因此要解决actionType唯一的问题，有一个方法就是通过添加前缀的方式来做

```javascript
function generateReducer(prefix,state){
    const LOAD_DATA = prefix + 'LOAD_DATA';
    const initialState = {...state,...};
    return function reducer(state=initialState,action){
        switch(action.type){
            case LOAD_DATA:
            return {
                ...state,
                data:action.playload
            }
            default:
                return state;
        }
    }
}

```

prefix可以是$\{页面名称}_$\{模块名称}，只要能保证全局唯一性，就可以写成一种前缀

高阶reducer主要通过下面3点来增强reducer:

- 能够处理额外的action
- 能够维护更多的state
- 将不能处理的action委托给原始的reducer处理

## redux与表单

为了减少重复冗余的代码，可以使用redux-from-utils这个工具库，它能利用高阶组件的特性为表单的每个字段提供value和onChange等必须值，
而对于复杂的表单，则可以使用redux-form。同样基于高阶组件的原理。它能同步验证，异步验证，嵌套表单验证


## 简单的crud实例

- 了解updeep
- redux-immutable

```javascript
import {combineReducers} from "redux-immutable";
import {createStore} from "redux";
const initalState = Immutable.Map();
const rootReducer = combineReducers({})
const store = createStore(rootReducer,initialState)
```

## Reducer性能优化

- logSlowReducers 它能够筛选出执行时间较高的reducer以及对应的action，从而有针对性地做优化
- specialActions
- batchActions([action1,action2,action3])

## 深入redux

### replaceReducer

reducer的热替换

## 服务器端渲染

Koa官方已经为我们实现了react-view Node的View引擎 react-view


### 题外--异步请求与redux的使用

- redux-thunk
- redux-promise
- redux-promise-middleware
- redux-saga
    - https://segmentfault.com/a/1190000007261052?_ea=1290634
    - 优点：
        - （1）集中处理了所有的异步操作，异步接口部分一目了然
        - （2）action是普通对象，这跟redux同步的action一模一样
        - （3）通过Effect，方便异步接口的测试
        - （4）通过worker 和watcher可以实现非阻塞异步调用，并且同时可以实
        - （5）声明式 Effects：所有的操作以JavaScript对象的方式被 yield，并被 middleware 执行。使得在 saga 内部测试变得更加容易，可以通过简单地遍历 Generator 并在 yield 后的成功值上面做一个 deepEqual 测试。
        - （6）高级的异步控制流以及并发管理：可以使用简单的同步方式描述异步流，并通过 fork 实现并发任务。
        - （7）架构上的优势：将所有的异步流程控制都移入到了 sagas，UI 组件不用执行业务逻辑，只需 dispatch action 就行，增强组件复用性。
