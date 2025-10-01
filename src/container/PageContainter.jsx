import React from "react";
import Container from "@mui/material/Container";

function PageContainter({ children }) {
   return <Container maxWidth="lg">{children}</Container>;
}

export default PageContainter;
