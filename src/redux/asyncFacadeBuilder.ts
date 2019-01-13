import { dispatch } from "./store";
import { ActionTypes } from "./reducer";

export async function asyncFacadeBuilder<
  T1 extends ActionTypes,
  T2 extends ActionTypes,
  T3 extends ActionTypes,
  P
>(
  action: {
    request: () => T1;
    success: (payload: P) => T2;
    failure: (error: Error) => T3;
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