import React, { useState, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import GifIcon from "@material-ui/icons/Gif";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import OurButton from "./styled/MainButton";
import Grid from "@material-ui/core/Grid";
import GifSection from "./GifSection";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import Dropbox from "./Dropbox/DropBox";
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
  haveAttachment: boolean;
  files?: any;
  setFiles?: (data: object) => void;
};

const CommentBox: React.FC<CommentType> = (props) => {
  const [isGifSelected, setGifSelected] = useState<Boolean>(false);
  const [isAttachSelected, setAttachSelected] = useState<Boolean>(false);
  const { files, setFiles } = props;
  const {
    type,
    content,
    style,
    haveAttachment,
    onSubmit,
    commentChange,
    gifUrl,
    gifChange,
    apiKey,
  } = props;
  const disableIfNoFile = Object.entries(files).length === 0;
  return (
    <Fragment>
      <form data-testid="comment-box" onSubmit={onSubmit}>
        {(type === "gif-comment" && isGifSelected === true) ||
        isAttachSelected === true ? (
          <Fragment>
            {isAttachSelected && <Dropbox files={files} setFiles={setFiles} />}
            {isGifSelected && <GifSection apiKey={apiKey} select={gifChange} />}
          </Fragment>
        ) : (
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
          </Fragment>
        )}

        <Fragment>
          <Grid style={{ margin: "10px 0px" }} item={true} sm={2} lg={1}>
            <GifIcon
              data-testid="gif-icon"
              onClick={() => {
                setAttachSelected(false);
                setGifSelected(true);
                setFiles([]);
              }}
              style={{ cursor: "pointer", margin: "0px 0px" }}
            />
            <TextFieldsIcon
              data-testid="text-icon"
              style={{ cursor: "pointer", margin: "0px 15px" }}
              onClick={() => {
                setAttachSelected(false);
                setGifSelected(false);
                setFiles([]);
              }}
            />
            {haveAttachment === true && (
              <AttachFileIcon
                data-testid="attach-icon"
                onClick={() => {
                  setAttachSelected(true);
                  setGifSelected(false);
                }}
                style={{ cursor: "pointer", margin: "0px 0px" }}
              />
            )}
          </Grid>
          {isAttachSelected === true && (
            <OurButton disabled={disableIfNoFile ? true : false}>
              Post Attachment
            </OurButton>
          )}
          {isGifSelected === false && isAttachSelected === false && (
            <OurButton
              disabled={
                content.length > 6 && content.length <= 200 ? false : true
              }
            >
              Post A Comment
            </OurButton>
          )}
          {isGifSelected === true && (
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
