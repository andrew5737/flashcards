import { initializeApi } from "./facades";
import * as api from "../services/api";
import * as store from "./store";
jest.mock("./store");
jest.mock("../services/api");

const dispatchListener = jest.spyOn(store, "dispatch");

afterEach(() => jest.clearAllMocks());

describe("initializeApi", () => {
  it("dispatch is called 2 times", async () => {
    await initializeApi();
    expect(dispatchListener.mock.calls.length).toBe(2);
  });

  it("dispatches error action when getAllDecks is rejected", async () => {
    jest.spyOn(api, "getAllDecks").mockRejectedValue(null);
    await initializeApi();
  });
});
