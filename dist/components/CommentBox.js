import React, { useState, Fragment } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import GifIcon from "@material-ui/icons/Gif";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import GifSection from "./GifSection";
const CommentBox = (props) => {
    console.log("commentbox props", props);
    const [isGifSelected, setGifSelected] = useState(false);
    const { type, content, commentChange, gifUrl, gifChange, apiKey } = props;
    return (React.createElement(Fragment, null, type === "gif-comment" && isGifSelected === false ? (React.createElement(Fragment, null,
        React.createElement(TextField, { className: "commentInput", type: "text", style: { borderRadius: "50%" }, id: "outlined-multiline-static", label: "Write A Comment", multiline: true, size: "medium", name: "comment_body", value: content, rows: content.length > 35 ? 3 : 1, error: content.length > 200 ? true : false, fullWidth: true, InputProps: {
                startAdornment: (React.createElement(InputAdornment, { style: { cursor: "pointer", alignItems: "center" }, position: "start" },
                    React.createElement(GifIcon, { onClick: () => setGifSelected(true) }))),
            }, margin: "normal", variant: "outlined", onChange: commentChange }),
        React.createElement(Button, { disabled: content.length > 6 && content.length <= 200 ? false : true, type: "submit", variant: "outlined", color: "primary" }, "Post A Comment"))) : (React.createElement(Fragment, null,
        React.createElement(GifSection, { apiKey: apiKey, select: gifChange }),
        React.createElement(Grid, { container: true, spacing: 1, style: { padding: "50px 0px" } },
            React.createElement(Grid, { item: true, sm: 1, lg: 1 },
                React.createElement(TextFieldsIcon, { style: { cursor: "pointer" }, onClick: () => setGifSelected(false) })),
            React.createElement(Grid, { item: true, sm: 2, lg: 3 },
                React.createElement(Button, { disabled: gifUrl !== "" ? false : true, size: "small", type: "submit", variant: "outlined", color: "primary" }, "Post GIPHY")))))));
};
export default CommentBox;
//# sourceMappingURL=CommentBox.js.map