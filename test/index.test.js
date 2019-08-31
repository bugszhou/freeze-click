import freezeClick from '../src/entry';

jest.useFakeTimers();

const cb = jest.fn((t) => {
  setTimeout(() => {
    t.cancel();
  }, 500);
});

describe('防止多次点击测试用例', () => {
  it('测试快速连续调用两次只执行一次', () => {
    const freezeFn = freezeClick(cb);
    freezeFn();
    freezeFn();

    expect(cb).toHaveBeenCalledTimes(1);
  });

  it('测试cancel后可继续执行', () => {
    const freezeFn = freezeClick(cb);
    freezeFn();
    jest.advanceTimersByTime(1000);
    freezeFn();

    expect(cb).toHaveBeenCalledTimes(2);
  });
});
