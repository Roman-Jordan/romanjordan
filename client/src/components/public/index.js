import React from "react";
import Header from "./headers";
import Body from "./body";
const PublicMainView = (props) => {
  return (
    <>
      <Header {...props} />
      <Body {...props} />
    </>
  );
};

export default PublicMainView;
