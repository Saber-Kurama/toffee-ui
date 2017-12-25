function createRippleHandler(instance, eventName, action, cb) {
  return function handleEvent(event) {
    if (cb) {
      cb.call(instance, event);
    }
    /* 事件的默认动作已被取消 */
    if (event.defaultPrevented) {
      return false;
    }
    // 执行该实例的ripple action的事件
    if (instance.ripple) {
      instance.ripple[action](event);
    }
    // 如果这个实例的属性上如果有该事件eventName就执行下
    if (instance.props && typeof instance.props[`on${eventName}`] === 'function') {
      instance.props[`on${eventName}`](event);
    }

    return true;
  };
}

export default createRippleHandler;
