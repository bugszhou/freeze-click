import { freezeClick, setWaitTime as setWaitTimeFn } from "../lib/index";
import freeze from "../lib/decorators";

export const setWaitTime = setWaitTimeFn;

export { freeze };

export default freezeClick;
