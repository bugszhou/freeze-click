/* eslint-disable no-param-reassign */
import { freezeClick } from ".";

export default function freeze(maxTime = 10000) {
  return function closureFn(target, property, descriptor) {
    const fn = descriptor.value;

    descriptor.value = freezeClick(async function newFn(fc, ...opts) {
      try {
        const result = await fn.apply(this, opts);
        return result;
      } catch (e) {
        throw e;
      } finally {
        fc.cancel();
      }
    }, maxTime);
  };
}
