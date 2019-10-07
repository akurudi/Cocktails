import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import Header from "./header";
import Footer from "./footer";
import { theme } from "./theme";

export default props => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <header>{<Header />}</header>
        {props.children}
        <footer>
          <Footer />
        </footer>
      </div>
    </ThemeProvider>
  );
};
