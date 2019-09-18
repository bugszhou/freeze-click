import throttle from 'lodash.throttle';

export const MODULE_NAME = 'freeze-click';

let waitTime = 10 * 1000;

export function setWaitTime(wait = 10 * 1000) {
  waitTime = waitTime
}

export function freezeClick(cb, wait) {
  let time = 10 * 1000;
  if (wait || wait === 0) {
    time = wait
  } else {
    time = waitTime;
  }
  const t = throttle(cb, time, { trailing: false });
  return function freezeFn(...args) {
    t.call(this, t, ...args);
  };
}
