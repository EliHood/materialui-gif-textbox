import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
const OurButton = styled(Button) `
  margin: 20px 0px;
`;
const MainButton = (props) => (React.createElement(OurButton, Object.assign({ style: props.buttonStyle, type: "submit", variant: "outlined", color: "primary", "data-testid": "comment-button" }, props), props.children));
export default MainButton;
//# sourceMappingURL=MainButton.js.map