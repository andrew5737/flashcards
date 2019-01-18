import { createAsyncAction } from "typesafe-actions";
import { AsyncActionBuilder } from "typesafe-actions/dist/create-async-action";
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

export interface CallableAsyncAction<
  T1 extends string,
  T2 extends string,
  T3 extends string,
  P,
  A extends any[]
> extends AsyncActionBuilder<T1, T2, T3, void, P, Error> {
  (...args: A): Promise<void>;
}
{
}

export function asyncActionCreator<
  T1 extends string,
  T2 extends string,
  T3 extends string,
  A extends any[],
  P
>(
  requestType: T1,
  successType: T2,
  failureType: T3,
  cb: (...args: A) => Promise<P>
): CallableAsyncAction<T1, T2, T3, P, A> {
  const asyncAction = createAsyncAction(requestType, successType, failureType)<void, P, Error>();

  const callableAsyncAction: any = (...args: A) =>
    asyncActionFacadeBuilder(asyncAction as any, cb as any, ...(args as any));
  callableAsyncAction.request = asyncAction.request;
  callableAsyncAction.success = asyncAction.success;
  callableAsyncAction.failure = asyncAction.failure;

  return callableAsyncAction;
}
