import * as store from "./store";
import { asyncActionFacadeBuilder } from "./asyncActionFacadeBuilder";
jest.mock("./store");

const dispatchListener = jest.spyOn(store, "dispatch");

const mockRequestReturnValue = "mockRequestReturnValue";
const mockSuccessReturnValue = "mockSuccessReturnValue";
const mockFailureReturnValue = "mockFailureReturnValue";
const mockAction: { request: any; success: any; failure: any } = {
  request: () => mockRequestReturnValue,
  success: () => mockSuccessReturnValue,
  failure: () => mockFailureReturnValue
};

afterEach(() => jest.resetAllMocks());

describe("asyncFacadeBuilder", () => {
  it("calls dispatch twice", async () => {
    const mockAsyncFunc = jest.fn().mockResolvedValue({} as any);
    await asyncActionFacadeBuilder(mockAction, mockAsyncFunc);

    expect(dispatchListener.mock.calls.length).toBe(2);
  });

  it("dispatches request then success", async () => {
    const mockAsyncFunc = jest.fn().mockResolvedValue({} as any);
    await asyncActionFacadeBuilder(mockAction, mockAsyncFunc);

    expect(dispatchListener.mock.calls.length).toBe(2);
    expect(dispatchListener.mock.calls[0][0]).toBe(mockRequestReturnValue);
    expect(dispatchListener.mock.calls[1][0]).toBe(mockSuccessReturnValue);
  });

  it("dispatches success with the content return by asyncFunc", async () => {
    const content = { content: "content" };
    const mockAsyncFunc = () => Promise.resolve(content);
    const customMockAction: { request: any; success: any; failure: any } = {
      ...mockAction,
      success: jest.fn().mockReturnValue(mockSuccessReturnValue)
    };

    await asyncActionFacadeBuilder(customMockAction, mockAsyncFunc);

    expect(dispatchListener.mock.calls[1][0]).toBe(mockSuccessReturnValue);
    expect(customMockAction.success.mock.calls.length).toBe(1);
    expect(customMockAction.success.mock.calls[0][0]).toBe(content);
  });

  it("dispatches request then failure when asyncFunction throws an error", async () => {
    const mockAsyncFunc = () => {
      throw new Error("Test error");
    };

    await asyncActionFacadeBuilder(mockAction, mockAsyncFunc);

    expect(dispatchListener.mock.calls.length).toBe(2);
    expect(dispatchListener.mock.calls[0][0]).toBe(mockRequestReturnValue);
    expect(dispatchListener.mock.calls[1][0]).toBe(mockFailureReturnValue);
  });

  it("dispatches failure with error when asyncFunction throws an error", async () => {
    const error = new Error("Test error");
    const mockAsyncFunc = () => {
      throw error;
    };
    const customMockAction: { request: any; success: any; failure: any } = {
      ...mockAction,
      failure: jest.fn().mockReturnValue(mockFailureReturnValue)
    };

    await asyncActionFacadeBuilder(customMockAction, mockAsyncFunc);

    expect(dispatchListener.mock.calls[1][0]).toBe(mockFailureReturnValue);
    expect(customMockAction.failure.mock.calls.length).toBe(1);
    expect(customMockAction.failure.mock.calls[0][0]).toBe(error);
  });
});
