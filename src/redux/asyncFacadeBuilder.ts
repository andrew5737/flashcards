import { dispatch } from "./store";
import * as actions from "./actions";

type ActionType = typeof actions[keyof typeof actions];
type ExtractedRequest<A> = A extends { request: infer X } ? X : () => void;
type ExtractedSuccess<A> = A extends { success: infer X } ? X : () => void;
type ExtractedFailture<A> = A extends { failure: infer X } ? X : () => void;
type ExtractedPayload<F> = F extends (args: any) => { payload: infer X } ? X : void;

export async function asyncFacadeBuilder<
  A extends ActionType,
  R extends ExtractedRequest<A>,
  S extends ExtractedSuccess<A>,
  F extends ExtractedFailture<A>,
  P extends ExtractedPayload<S>
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
    dispatch((action.success as any)(resp));
  } catch (e) {
    dispatch(action.failure(e));
  }
}
