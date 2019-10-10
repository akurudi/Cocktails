import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline, Container } from "@material-ui/core";
import Header from "./header";
import Footer from "./footer";
import { theme } from "./theme";

export default props => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <header>
          <Header />
        </header>
        {props.children}
        <footer>
          <Footer />
        </footer>
      </Container>
    </ThemeProvider>
  );
};
