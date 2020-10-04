import React, { useState } from "react";
import { render } from "react-dom";
import CommentBox from "../src";
function App() {
  const [commentBody, setCommentBody] = useState("");
  const [gifUrl, setGifUrl] = useState("");
  const [files, setFiles] = useState([]);
  const selectGif = React.useCallback(
    (e) => {
      setGifUrl(e.images.downsized_large.url);
      setCommentBody("");
    },
    [setGifUrl, setCommentBody]
  );
  const commentChange = React.useCallback(
    (data) => {
      setGifUrl("");
      setCommentBody(data);
    },
    [setGifUrl, setCommentBody]
  );
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      url: gifUrl,
      content: commentBody,
      file: files,
    };
    console.log(data);
  };
  return (
    <CommentBox
      type="gif-comment"
      apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
      commentChange={(e) => commentChange(e.target.value)}
      content={commentBody}
      gifChange={selectGif}
      gifUrl={gifUrl}
      onSubmit={onSubmit}
      files={files}
      setFiles={setFiles}
      haveAttachment={true}
    />
  );
}
render(<App />, document.getElementById("root"));
