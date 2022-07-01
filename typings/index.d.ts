
declare module "freeze-click" {
  const freezeClick: (
    fn: (
      fc: {
        cancel: () => void;
      },
      ...opts: any
    ) => any,
    timeout?: number,
  ) => any;
  export const setWaitTime: (timeout: number) => void;
  export const freeze: (maxTimeout?: number) => (target, property, descriptor) => void;
  export default freezeClick;
}
