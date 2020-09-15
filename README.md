## Material UI Text/Gif Comment Box (still in development)

##### Component that is built on top of Material UI, and React Giphy Searchbox.

![Screenshot](./screenshots/pic.gif)

### Install

```
npm i material-ui-gif-textbox
```

### **Basic Example**

```js
import CommentBox from "material-ui-gif-textbox";
function App() {
  const [commentBody, setCommentBody] = useState("");
  const [gifUrl, setGifUrl] = useState("");
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
    />
  );
}
```
