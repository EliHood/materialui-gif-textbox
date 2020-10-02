import React, { useState, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import GifIcon from "@material-ui/icons/Gif";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import OurButton from "./styled/MainButton";
import Grid from "@material-ui/core/Grid";
import GifSection from "./GifSection";
const CommentBox = (props) => {
    const [isGifSelected, setGifSelected] = useState(false);
    const { type, content, style, buttonStyle, onSubmit, commentChange, gifUrl, gifChange, apiKey, } = props;
    return (React.createElement(Fragment, null,
        React.createElement("form", { "data-testid": "comment-box", onSubmit: onSubmit },
            type === "gif-comment" && isGifSelected === true && (React.createElement(Fragment, null,
                React.createElement(GifSection, { apiKey: apiKey, select: gifChange }),
                React.createElement(Grid, { container: true, spacing: 0, style: { padding: "10px 0px" } }))),
            React.createElement(Fragment, null,
                React.createElement(TextField, { className: "commentInput", "data-testid": "comment_input", type: "text", style: style, id: "outlined-multiline-static", label: "Write A Comment", multiline: true, size: "medium", name: "comment_body", value: content, rows: content.length > 35 ? 3 : 1, error: content.length > 200 ? true : false, fullWidth: true, margin: "normal", variant: "outlined", onChange: commentChange }),
                React.createElement(Grid, { style: { margin: "10px 0px" }, item: true, sm: 2, lg: 1 },
                    React.createElement(GifIcon, { "data-testid": "gif-icon", onClick: () => setGifSelected(true), style: { cursor: "pointer", margin: "0px 0px" } }),
                    React.createElement(TextFieldsIcon, { "data-testid": "text-icon", style: { cursor: "pointer", margin: "0px 15px" }, onClick: () => setGifSelected(false) })),
                isGifSelected === false ? (React.createElement(OurButton, { disabled: content.length > 6 && content.length <= 200 ? false : true }, "Post A Comment")) : (React.createElement(Grid, { item: true, sm: 2, lg: 3 },
                    React.createElement(OurButton, { disabled: gifUrl !== "" ? false : true }, "Post GIPHY")))))));
};
export default CommentBox;
//# sourceMappingURL=CommentBox.js.map