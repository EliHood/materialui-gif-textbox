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
  setFiles: jest.fn(),
  files: [
    {
      path: "f4ab817f6bb0ddc689fef5fc6e7fe0b3.jpg",
      preview:
        "blob:http://localhost:3001/1b5cf09c-7156-4e3d-9d44-458254686915",
    },
  ],
};

describe("CommentBox Test", () => {
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
      render(
        <CommentBox
          type="gif-comment"
          apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
          commentChange={mockProps.commentChange}
          content={"A Word"}
          gifChange={mockProps.gifChange}
          gifUrl={"fsfsfsfsfsfsfsfs"}
          onSubmit={mockProps.onSubmit}
          haveAttachment={false}
          files={[]}
          setFiles={mockProps.setFiles}
        />
      );
    });
  });

  it("should render <CommentBox/>", () => {
    expect(screen.getByTestId("comment-box")).toBeInTheDocument();
  });

  it("should render textfield ", () => {
    expect(screen.getByTestId("comment_input")).toBeInTheDocument();
  });

  it("should render button", () => {
    expect(screen.getByTestId("comment-button")).toBeInTheDocument();
  });

  it("button should be disabled", () => {
    expect(screen.getByTestId("comment-button")).toBeDisabled();
  });

  it("should test onChange TextField", () => {
    const field = screen.getByTestId("comment_input").querySelector("textarea");
    fireEvent.change(field, {
      target: { name: "comment_body", defaultValue: "Owls Are Cool" },
    });

    expect(field.defaultValue).toBe("Owls Are Cool");
  });

  it("should click gif icon and click text icon ", async () => {
    fireEvent.click(screen.getByTestId("gif-icon"));
    await waitFor(() =>
      expect(screen.getByTestId("gif-section")).toBeInTheDocument()
    );
    fireEvent.click(screen.getByTestId("text-icon"));
    expect(screen.getByTestId("comment_input")).toBeInTheDocument();
  });

  afterEach(cleanup);
});

describe("Should render <CommentBox/> diffent use case", () => {
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
      render(
        <CommentBox
          type="gif-comment"
          apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
          commentChange={mockProps.commentChange}
          content={
            "BlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlahBlah"
          }
          gifChange={mockProps.gifChange}
          gifUrl={"fsfsfsfsfsfsfsfs"}
          onSubmit={mockProps.onSubmit}
          haveAttachment={false}
          files={[]}
          setFiles={mockProps.setFiles}
        />
      );
    });
  });

  it("button should be disabled", () => {
    expect(screen.getByTestId("comment-button")).toBeEnabled();
  });
});

describe("Should render <CommentBox/> diffent use case if attachment is true", () => {
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
      render(
        <CommentBox
          type="gif-comment"
          apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
          commentChange={mockProps.commentChange}
          content={""}
          gifChange={mockProps.gifChange}
          gifUrl={null}
          onSubmit={mockProps.onSubmit}
          haveAttachment={true}
          files={[]}
          setFiles={mockProps.setFiles}
        />
      );
    });
  });

  it("should click attach icon", async () => {
    fireEvent.click(screen.getByTestId("attach-icon"));
    await waitFor(() =>
      expect(screen.getByTestId("dropzone")).toBeInTheDocument()
    );
  });

  it("button should be disabled", () => {
    expect(screen.getByTestId("comment-button")).toBeDisabled();
  });
});

describe("Should render <CommentBox/> diffent use case if attachment is true and button should be enabled because files is not empty", () => {
  URL.revokeObjectURL = jest.fn();
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
      render(
        <CommentBox
          type="gif-comment"
          apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
          commentChange={mockProps.commentChange}
          content={""}
          gifChange={mockProps.gifChange}
          gifUrl={null}
          onSubmit={mockProps.onSubmit}
          haveAttachment={true}
          files={mockProps.files}
          setFiles={mockProps.setFiles}
        />
      );
    });
  });

  it("should click attach icon", async () => {
    fireEvent.click(screen.getByTestId("attach-icon"));
    await waitFor(() => {
      expect(screen.getByTestId("dropzone")).toBeInTheDocument();
      expect(screen.getByTestId("comment-button")).toBeEnabled();
    });
  });
});
