import * as store from "./store";
import { asyncFacadeBuilder } from "./asyncFacadeBuilder";
jest.mock("./store");

const dispatchListener = jest.spyOn(store, "dispatch");

const mockAction: { request: any; success: any; failure: any } = {
  request: jest.fn().mockReturnValue("request"),
  success: jest.fn().mockReturnValue("success"),
  failure: jest.fn().mockReturnValue("failure")
};

afterEach(() => jest.resetAllMocks());

describe("asyncFacadeBuilder", () => {
  it("dispatch is called 2 times", async () => {
    const mockAsyncFunc = jest.fn().mockResolvedValue({} as any);
    await asyncFacadeBuilder(mockAction, mockAsyncFunc);

    expect(dispatchListener.mock.calls.length).toBe(2);
  });

  it("dispatch recieves request then success", async () => {
    const mockAsyncFunc = jest.fn().mockResolvedValue({} as any);
    await asyncFacadeBuilder(mockAction, mockAsyncFunc);

    expect(dispatchListener.mock.calls.length).toBe(2);
    console.log(dispatchListener.mock.calls);
    expect(dispatchListener.mock.calls[0][0]).toBe("request");
  });
});
