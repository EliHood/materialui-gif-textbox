## Text/Gif Comment Box

##### Component that is built on top of Material UI, and React Giphy Searchbox.

### Install

`npm i comment-simple-demo`

### **Basic Example**

```
import CommentBox from 'commentbox-simple-demo'
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
  return (
    <CommentBox
      type="gif-comment"
      apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
      commentChange={(e) => commentChange(e.target.value)}
      content={commentBody}
      gifChange={selectGif}
      gifUrl={gifUrl}
    />
  );
```
