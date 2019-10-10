## freeze-click
----------------------------
author: bugszhou | Email:bugszhou@outlook.com <br>
description: 防止多次点击

freeze-click(冻结点击)：在用户点击一个按钮时，为了节流保证用户在接口返回后，再次点击才触发下一次请求

### Usual

* 默认冻结10s，10s内只请求一次，需要手动调用`cancel`取消冻结才能发送第二次请求。未调用`cancel`将在60s后自动释放。

1. install

```shell
npm install --save freeze-click;
```

2. Use

```javascript
import freezeClick from 'freeze-click';

const handleClick = freezeClick((t) => {
    //t 为freeze-click实例
    setTimeout(() => {
        console.log('click');
    }, 5000);
});

// just call one time
handleClick();
handleClick();
handleClick();

setTimeout(() => {
    handleClick(); // call again
}, 6000);
```

### freezeClick(func, [freezeTime=60*1000])

```javascript
const freezeFn = freezeClick(func, 10000);
```

创建并返回一个冻结函数，在 freezeTime(默认60*1000ms，单位ms) 秒内最多执行 func 一次的函数。 在执行`func(freezeFnObj)`函数时，会把冻结函数的实例(freezeFnObj)作为第一个参数，`freezeFnObj`含有 cancel 方法用于取消延迟的函数。

* 例如：

```javascript
const handleClick = freezeClick((freezeFnObj) => {
    //t 为freeze-click实例
    setTimeout(() => {
        console.log('click');
        freezeFnObj.cancel()
    }, 5000);
});

handleClick();
setTimeout(() => {
    handleClick(); // call again
}, 5100);
```

- **参数**

func(Function): 需要冻结的函数，第一个参数为`freezeFnObj`含有 cancel 方法用于取消延迟的函数。
freezeTime(number): 需要冻结的时间，单位ms

- **返回**

(Function): 冻结后的函数

### setWaitTime(wait = 10 * 1000)

修改冻结时间

```javascript
import {setWaitTime} from 'freeze-click';

setWaitTime(500);
```
