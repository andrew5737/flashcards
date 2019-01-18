import { createAsyncAction } from "typesafe-actions";
import { AsyncActionBuilder } from "typesafe-actions/dist/create-async-action";
import { dispatch } from "./store";

async function asyncActionFacadeBuilder<P, A extends any[]>(
  action: any,
  asyncFunc: (...args: A) => Promise<P>,
  ...asyncFuncArgs: A
): Promise<void> {
  dispatch(action.request());
  try {
    const resp = await asyncFunc(...asyncFuncArgs);
    dispatch(action.success(resp));
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
    asyncActionFacadeBuilder(asyncAction, cb, ...args);
  callableAsyncAction.request = asyncAction.request;
  callableAsyncAction.success = asyncAction.success;
  callableAsyncAction.failure = asyncAction.failure;

  return callableAsyncAction;
}
