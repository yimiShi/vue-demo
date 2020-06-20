/* 
全局事件总线对象模块
*/

const eventBus = {};

// 缓存监听回调函数, 
// {eventName1: [listener1, listener2], eventName2: [listener3]}
const listenersContainer = {}

/* 
绑定自定义事件监听的方法
*/
eventBus.on = function (eventName, listener) {

  const listeners = listenersContainer[eventName]

  // 没有就创建一个 空数组并保存
  if (!listeners) {
    listenersContainer[eventName] = listeners = []
  }

  listeners.push(listener)

};

/* 
分发自定义事件
*/
eventBus.emit = function (eventName, data) {
  // 得到对应的listeners
  const listeners = listenersContainer[eventName]
  // 如果由就调用所有的listener
  if (listeners && listeners.length) {
    listeners.forEach(listener => {
      listener(data)
    })
  }
};


/* 
解绑事件自定义事件监听
*/
eventBus.off = function (eventName) {
  if (eventName === null || eventName === undefined) {
    listenersContainer = {}
  } else {
    listenersContainer[eventName] = []
    // delete listenersContainer[eventName]
  }

};

export default eventBus;
