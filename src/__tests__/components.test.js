import React from "react";
import { shallow, mount } from "enzyme";
import { MinutesList } from "../components/minutes-list";
import { Fallback } from "../components/fallback";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Spacer } from "../components/spacer";

describe("Fallback", () => {
  it("renders error if error is provided", () => {
    const wrapper = shallow(<Fallback error />);
    expect(wrapper.text()).toMatchInlineSnapshot(
      `"Error!Open devtools for more information"`
    );
  });

  it("renders loading if no error provided", () => {
    const wrapper = shallow(<Fallback error={false} />);
    expect(wrapper.text()).toMatchInlineSnapshot(`"Loading..."`);
  });
});

describe("Footer", () => {
  it("renders an empty div", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.html()).toMatchInlineSnapshot(`"<div></div>"`);
  });
});

describe("Header", () => {
  it("renders refresh button", () => {
    const wrapper = mount(<Header />);
    expect(wrapper.text()).toMatchInlineSnapshot(`"REFRESH"`);
  });
});

describe("Spacer", () => {
  it("renders text", () => {
    const wrapper = mount(<Spacer text="Blah" />);
    expect(wrapper.text()).toMatchInlineSnapshot(`"Blah"`);
  });
});

describe("MinutesList", () => {
  it("displays nothing if no minutes provided", () => {
    const wrapper = mount(<MinutesList mins={[]} />);
    expect(wrapper.text()).toMatchInlineSnapshot(`""`);
  });

  it("displays provided minutes", () => {
    const mins = [1, 4];
    const wrapper = mount(<MinutesList mins={mins} />);
    expect(wrapper.text()).toMatchInlineSnapshot(`"1min4min"`);
  });
});
