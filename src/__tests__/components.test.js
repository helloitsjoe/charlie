import React from "react";
import { shallow, mount } from "enzyme";
import MinutesList from "../components/minutes-list";
import Fallback from "../components/fallback";
import Footer from "../components/footer";
import Header from "../components/header";
import Spacer from "../components/spacer";

describe("Fallback", () => {
  it("renders error if error is provided", () => {
    const mockErr = { message: "sorryyy", stack: "this is a stack" };
    const wrapper = shallow(<Fallback error={mockErr} />);
    expect(wrapper.text()).toMatchInlineSnapshot(
      `"Error!sorryyythis is a stackOpen devtools for more information"`
    );
  });

  it("renders loading if no error provided", () => {
    const wrapper = shallow(<Fallback error={null} />);
    expect(wrapper.text()).toMatchInlineSnapshot(`"Loading..."`);
  });
});

describe("Footer", () => {
  it("renders hourOfDay if provided", () => {
    const wrapper = mount(<Footer hourOfDay={12} />);
    expect(wrapper.text()).toMatchInlineSnapshot(`"12"`);
  });
});

describe("Header", () => {
  it("renders refresh button", () => {
    const wrapper = mount(<Header reFetch={() => {}} />);
    expect(wrapper.text()).toMatchInlineSnapshot(`"REFRESH"`);
  });

  it("calls reFetch on button click", () => {
    const reFetch = jest.fn();
    const wrapper = mount(<Header reFetch={reFetch} />);
    expect(reFetch).not.toBeCalled();
    wrapper
      .find({ children: "REFRESH" })
      .last()
      .simulate("click");
    expect(reFetch).toBeCalled();
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
