
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
  export default freezeClick;
}
