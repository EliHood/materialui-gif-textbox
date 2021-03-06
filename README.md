## Material UI Text/Gif/Attachment Comment Box

##### Component that is built on top of Material UI, and React Giphy Searchbox.

![](snapshot.gif)

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
  const [files, setFiles] = useState([]);
  const selectGif = React.useCallback(
    (e) => {
      setGifUrl(e.images.downsized_large.url);
      setCommentBody("");
    },
    [gifUrl, commentBody]
  );
  const commentChange = React.useCallback(
    (data) => {
      setGifUrl("");
      setCommentBody(data);
    },
    [gifUrl, commentBody]
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
```
