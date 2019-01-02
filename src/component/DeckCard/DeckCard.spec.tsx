import React from "react";
import { shallow } from "enzyme";
import { DeckCard } from "./index";

describe("<DeckCard />", () => {
  it("renders without crashing", () => {
    shallow(<DeckCard front={""} back={""} />);
  });

  it("after mounting displays `props.card.front` to `.card--text`", () => {
    const front = "front";
    const wrapper = shallow(<DeckCard front={front} back={""} />);
    expect(wrapper.find(".card--text").text()).toBe(front);
  });

  it("flips card when button is pressed", () => {
    const front = "front";
    const back = "back";
    const wrapper = shallow(<DeckCard front={front} back={back} />);
    wrapper.find(".card--flip-button").simulate("click");
    expect(wrapper.find(".card--text").text()).toBe(back);
  });

  it("colors .card background green when not flipped", () => {
    const wrapper = shallow(<DeckCard front={"front"} back={"back"} />);
    wrapper.setState({ flipped: false });

    expect(wrapper.find(".card").prop("style")).toHaveProperty(
      "backgroundColor",
      "#d6f6f6"
    );
  });

  it("colors .card background blue when flipped", () => {
    const wrapper = shallow(<DeckCard front={"front"} back={"back"} />);
    wrapper.setState({ flipped: true });

    expect(wrapper.find(".card").prop("style")).toHaveProperty(
      "backgroundColor",
      "#d6f6d6"
    );
  });
});
