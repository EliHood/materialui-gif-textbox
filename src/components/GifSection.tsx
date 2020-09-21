import React, { Fragment } from "react";
import ReactGiphySearchbox from "react-giphy-searchbox";
import "./style.css";
type GifType = {
  apiKey: string;
  select: (e: any) => void;
};
const GifSection: React.FC<GifType> = (props) => {
  const { apiKey, select } = props;
  return (
    <div data-testid="gif-section">
      <ReactGiphySearchbox
        data-testid="search-box"
        wrapperClassName="gifForm"
        searchFormClassName={{ padding: "20px 0px" }}
        apiKey={apiKey}
        onSelect={(e) => select(e)}
        masonryConfig={[
          { columns: 4, imageWidth: 110, gutter: 5 },
          { mq: "1000px", columns: 4, imageWidth: 120, gutter: 5 },
        ]}
      />
    </div>
  );
};
export default GifSection;
