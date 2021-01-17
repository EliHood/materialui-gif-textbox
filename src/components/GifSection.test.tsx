import React from "react";
import "@testing-library/jest-dom";
import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
  getByTestId,
} from "@testing-library/react";
import { enableFetchMocks } from "jest-fetch-mock";
import GifSection from "./GifSection";
import { act } from "react-dom/test-utils";
const mockProps = {
  apiKey: "9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7",
  select: jest.fn(),
};
describe("<GifSection> test", () => {
  beforeEach(async () => {
    enableFetchMocks();
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    await act(async () => {
      render(<GifSection {...mockProps} />);
    });
  });

  it("should render <GifSection/> ", () => {
    expect(screen.getByTestId("gif-section")).toBeInTheDocument();
  });

  it("should test select onChange", () => {
    const field = screen.getByTestId("SearchFormInput") as HTMLInputElement;
    fireEvent.change(field, {
      target: {
        value:
          "https://media0.giphy.com/media/3xz2BvpyQkY46uKrEQ/giphy.gif?cid=e8452e687829e48afb302853c05c514d6fb85394392211d4&rid=giphy.gif",
      },
    });

    expect(field.value).toBe(
      "https://media0.giphy.com/media/3xz2BvpyQkY46uKrEQ/giphy.gif?cid=e8452e687829e48afb302853c05c514d6fb85394392211d4&rid=giphy.gif"
    );
  });
});

describe("<GifSection/> test case", () => {
  beforeEach(async () => {
    enableFetchMocks();
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), 
        removeListener: jest.fn(), 
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

});
