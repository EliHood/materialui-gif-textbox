import React, { useState, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import GifIcon from "@material-ui/icons/Gif";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import OurButton from "./styled/MainButton";
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
  style?: object;
  buttonStyle?: object;
};

const CommentBox: React.FC<CommentType> = (props) => {
  const [isGifSelected, setGifSelected] = useState<Boolean>(false);
  const {
    type,
    content,
    style,
    buttonStyle,
    onSubmit,
    commentChange,
    gifUrl,
    gifChange,
    apiKey,
  } = props;
  return (
    <Fragment>
      <form data-testid="comment-box" onSubmit={onSubmit}>
        {type === "gif-comment" && isGifSelected === true && (
          <Fragment>
            <GifSection apiKey={apiKey} select={gifChange} />
            <Grid
              container={true}
              spacing={0}
              style={{ padding: "10px 0px" }}
            ></Grid>
          </Fragment>
        )}

        <Fragment>
          <TextField
            className="commentInput"
            data-testid="comment_input"
            type="text"
            style={style}
            id="outlined-multiline-static"
            label="Write A Comment"
            multiline={true}
            size={"medium"}
            name="comment_body"
            value={content}
            rows={content!.length > 35 ? 3 : 1}
            error={content!.length > 200 ? true : false}
            fullWidth={true}
            margin="normal"
            variant="outlined"
            onChange={commentChange}
          />
          <Grid style={{ margin: "10px 0px" }} item={true} sm={2} lg={1}>
            <GifIcon
              data-testid="gif-icon"
              onClick={() => setGifSelected(true)}
              style={{ cursor: "pointer", margin: "0px 0px" }}
            />
            <TextFieldsIcon
              data-testid="text-icon"
              style={{ cursor: "pointer", margin: "0px 15px" }}
              onClick={() => setGifSelected(false)}
            />
          </Grid>
          {isGifSelected === false ? (
            <OurButton
              disabled={
                content.length > 6 && content.length <= 200 ? false : true
              }
            >
              Post A Comment
            </OurButton>
          ) : (
            <Grid item={true} sm={2} lg={3}>
              <OurButton disabled={gifUrl !== "" ? false : true}>
                Post GIPHY
              </OurButton>
            </Grid>
          )}
        </Fragment>
      </form>
    </Fragment>
  );
};

export default CommentBox;
