import React from "react";
import { client } from "../prismic-configuration";
import Layout from "../components/layout";
import { Paper, Grid, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { RichText } from "prismic-reactjs";

let Cocktail = doc => {
  const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      margin: theme.spacing(3, 2)
    }
  }));
  const classes = useStyles();
  return (
    <Layout>
      <Grid container justify="center">
        <Grid item xs={11}>
          <Paper className={classes.root} elevation={20}>
            <Typography variant="h5" component="h3">
              {RichText.asText(doc.data.name)}
            </Typography>
            <ul>
            {doc.data.ingredients.map(elem => {
              return <li key={elem.ingredient}>{elem.ingredient}</li>;
            })}
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

Cocktail.getInitialProps = async ({ query }) => {
  const doc = await client.getByUID("recipe", query.cocktail);
  return doc;
};

export default Cocktail;
