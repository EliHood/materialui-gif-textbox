import React from "react";
import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/react";
import { enableFetchMocks } from "jest-fetch-mock";
import CommentBox from "./CommentBox";
import { act } from "react-dom/test-utils";
const mockProps = {
  type: "post",
  content: "A Word",
  commentChange: jest.fn(),
  gifChange: jest.fn(),
  gifUrl: "fsfsfsfsfsfsfsfs",
  apiKey: "9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7",
  onSubmit: jest.fn(),
};

describe("CommentBox Test", () => {
  beforeAll(async () => {
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
      render(
        <CommentBox
          type="post"
          apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
          commentChange={mockProps.commentChange}
          content={"A Word"}
          gifChange={mockProps.gifChange}
          gifUrl={"fsfsfsfsfsfsfsfs"}
          onSubmit={mockProps.onSubmit}
        />
      );
    });
  });

  it("should render <CommentBox/>", () => {
    expect(screen.getByTestId("comment-box")).toBeInTheDocument();
  });
  afterEach(cleanup);
});
