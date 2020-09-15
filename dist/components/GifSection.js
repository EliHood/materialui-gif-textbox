import React, { Fragment } from "react";
import ReactGiphySearchbox from "react-giphy-searchbox";
import "./style.css";
const GifSection = (props) => {
    console.log("fsfsfsfs", props);
    const { apiKey, select } = props;
    return (React.createElement(Fragment, null,
        React.createElement(ReactGiphySearchbox, { wrapperClassName: "gifForm", searchFormClassName: { padding: "20px 0px" }, apiKey: apiKey, onSelect: (e) => select(e), masonryConfig: [
                { columns: 4, imageWidth: 110, gutter: 5 },
                { mq: "1000px", columns: 4, imageWidth: 120, gutter: 5 },
            ] })));
};
export default GifSection;
//# sourceMappingURL=GifSection.js.map