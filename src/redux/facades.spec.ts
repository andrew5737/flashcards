import { initializeApi } from "./facades";
import * as api from "../services/api";
import * as store from "./store";
import { getType } from "typesafe-actions";
import { initializeApiAction } from "./actions";
import { Deck } from "../entities/Deck";
import { Card } from "../entities/Card";
jest.mock("./store");
jest.mock("../services/api");

const dispatchListener = jest.spyOn(store, "dispatch");

afterEach(() => jest.resetAllMocks());

describe("initializeApi", () => {
  it("dispatch request action", async () => {
    await initializeApi();
    expect(dispatchListener.mock.calls[0][0].type).toBe(
      getType(initializeApiAction.request)
    );
  });

  it("dispatch request action followed by success action", async () => {
    await initializeApi();
    expect(dispatchListener.mock.calls[0][0].type).toBe(
      getType(initializeApiAction.request)
    );
    expect(dispatchListener.mock.calls[1][0].type).toBe(
      getType(initializeApiAction.success)
    );
  });

  it("passes decks to success action", async () => {
    const decks = [new Deck(0, "deck")];
    jest.spyOn(api, "getAllDecks").mockResolvedValue(decks);
    await initializeApi();
    expect(dispatchListener.mock.calls[1][0].type).toBe(
      getType(initializeApiAction.success)
    );
    expect(dispatchListener.mock.calls[1][0].payload.decks).toBe(decks);
  });

  it("passes cards to success action", async () => {
    const cards = [new Card(0, "front", "back", 0)];
    jest.spyOn(api, "getAllCards").mockResolvedValue(cards);
    await initializeApi();
    expect(dispatchListener.mock.calls[1][0].type).toBe(
      getType(initializeApiAction.success)
    );
    expect(dispatchListener.mock.calls[1][0].payload.cards).toBe(cards);
  });

  it("dispatches requestion action followed by failure action when getAllDecks is rejected", async () => {
    jest.spyOn(api, "getAllDecks").mockRejectedValue(null);
    await initializeApi();
    expect(dispatchListener.mock.calls[0][0].type).toBe(
      getType(initializeApiAction.request)
    );
    expect(dispatchListener.mock.calls[1][0].type).toBe(
      getType(initializeApiAction.failure)
    );
  });

  it("dispatches requestion action followed by failure action when getAllCards is rejected", async () => {
    jest.spyOn(api, "getAllCards").mockRejectedValue(null);
    await initializeApi();
    expect(dispatchListener.mock.calls[0][0].type).toBe(
      getType(initializeApiAction.request)
    );
    expect(dispatchListener.mock.calls[1][0].type).toBe(
      getType(initializeApiAction.failure)
    );
  });

  it("error is passed to rejected action's payload", async () => {
    const err = new Error();
    jest.spyOn(api, "getAllCards").mockRejectedValue(err);
    await initializeApi();
    expect(dispatchListener.mock.calls[1][0].type).toBe(
      getType(initializeApiAction.failure)
    );
    expect(dispatchListener.mock.calls[1][0].payload).toBe(err);
  });
});
