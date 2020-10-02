import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
const OurButton = styled(Button)`
  margin: 20px 0px;
`;

const MainButton = (props: any) => (
  <OurButton
    style={props.buttonStyle}
    type="submit"
    variant="outlined"
    color="primary"
    data-testid="comment-button"
    {...props}
  >
    {props.children}
  </OurButton>
);
export default MainButton;
