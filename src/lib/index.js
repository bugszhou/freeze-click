import throttle from 'lodash.throttle';
export const MODULE_NAME = 'freeze-click';

export function freezeClick(cb, wait = 60 * 1000) {
  const t = throttle(cb, wait, { trailing: false });
  return function(...args) {
    t.call(this, t, ...args);
  };
};