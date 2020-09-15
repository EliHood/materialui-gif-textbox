import React, { useState, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import GifIcon from "@material-ui/icons/Gif";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import GifSection from "./GifSection";
type CommentType = {
  type: "gif-comment" | "post";
  content: string;
  commentChange: (data: any) => void;
  gifChange: any;
  gifUrl: string;
  apiKey: string;
  onSubmit: (e: any) => void;
};

const CommentBox: React.FC<CommentType> = (props) => {
  console.log("commentbox props", props);
  const [isGifSelected, setGifSelected] = useState<Boolean>(false);
  const {
    type,
    content,
    onSubmit,
    commentChange,
    gifUrl,
    gifChange,
    apiKey,
  } = props;
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        {type === "gif-comment" && isGifSelected === false ? (
          <Fragment>
            <TextField
              className="commentInput"
              type="text"
              style={{ borderRadius: "50%" }}
              id="outlined-multiline-static"
              label="Write A Comment"
              multiline={true}
              size={"medium"}
              name="comment_body"
              value={content}
              rows={content!.length > 35 ? 3 : 1}
              error={content!.length > 200 ? true : false}
              fullWidth={true}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    style={{ cursor: "pointer", alignItems: "center" }}
                    position="start"
                  >
                    <GifIcon onClick={() => setGifSelected(true)} />
                  </InputAdornment>
                ),
              }}
              margin="normal"
              variant="outlined"
              onChange={commentChange}
            />
            <Button
              disabled={
                content.length > 6 && content.length <= 200 ? false : true
              }
              type="submit"
              variant="outlined"
              color="primary"
            >
              Post A Comment
            </Button>
          </Fragment>
        ) : (
          <Fragment>
            <GifSection apiKey={apiKey} select={gifChange} />
            <Grid container={true} spacing={1} style={{ padding: "50px 0px" }}>
              <Grid item={true} sm={1} lg={1}>
                <TextFieldsIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => setGifSelected(false)}
                />
              </Grid>
              <Grid item={true} sm={2} lg={3}>
                <Button
                  disabled={gifUrl !== "" ? false : true}
                  size="small"
                  type="submit"
                  variant="outlined"
                  color="primary"
                >
                  Post GIPHY
                </Button>
              </Grid>
            </Grid>
          </Fragment>
        )}
      </form>
    </Fragment>
  );
};

export default CommentBox;
