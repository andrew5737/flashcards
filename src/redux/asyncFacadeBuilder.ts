import { dispatch } from "./store";
import * as actions from "./actions";

type actions = typeof actions[keyof typeof actions];
type extractRequest<Type> = Type extends { request: infer X } ? X : () => void;
type extractSuccess<Type> = Type extends { success: infer X } ? X : () => void;
type extractFailure<Type> = Type extends { failure: infer X } ? X : () => void;
type extractPayload<Type> = Type extends (args: any) => { payload: infer X }
  ? X
  : void;

export async function asyncFacadeBuilder<
  A extends actions,
  R extends extractRequest<A>,
  S extends extractSuccess<A>,
  F extends extractFailure<A>,
  P extends extractPayload<S>
>(
  action: {
    request: R;
    success: S;
    failure: F;
  },
  asyncFunc: () => Promise<P>
): Promise<void> {
  dispatch(action.request());
  try {
    const resp = await asyncFunc();
    dispatch(action.success(resp));
  } catch (e) {
    dispatch(action.failure(e));
  }
}
