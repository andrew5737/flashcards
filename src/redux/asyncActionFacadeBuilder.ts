import { dispatch } from "./store";
import * as actions from "./actions";

type ActionType = typeof actions[keyof typeof actions];
type ExtractedRequest<A> = A extends { request: infer X } ? X : () => void;
type ExtractedSuccess<A> = A extends { success: infer X } ? X : () => void;
type ExtractedFailture<A> = A extends { failure: infer X } ? X : () => void;
type ExtractedPayload<F> = F extends (args: any) => { payload: infer X } ? X : void;

export async function asyncActionFacadeBuilder<
  A extends ActionType,
  R extends ExtractedRequest<A>,
  S extends ExtractedSuccess<A>,
  F extends ExtractedFailture<A>,
  P extends ExtractedPayload<S>,
  AF_ARGS extends any[]
>(
  action: {
    request: R;
    success: S;
    failure: F;
  },
  asyncFunc: (...args: AF_ARGS) => Promise<P>,
  ...asyncFuncArgs: AF_ARGS
): Promise<void> {
  dispatch(action.request());
  try {
    const resp = await asyncFunc(...asyncFuncArgs);
    dispatch((action.success as any)(resp));
  } catch (e) {
    dispatch(action.failure(e));
  }
}
