import React from "react";
import { client } from "../prismic-configuration";
import Layout from "../components/layout";
import {
  Paper,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { RichText } from "prismic-reactjs";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(5),
    marginTop: theme.spacing(3)
  },
  chip: {
    marginLeft: theme.spacing(1)
  }
}));

const Cocktail = doc => {
  const classes = useStyles();
  return (
    <Layout>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Paper className={classes.paper} elevation={20}>
            <Typography variant="h5" component="h3">
              {RichText.asText(doc.data.name)}
            </Typography>
            <List>
              {doc.data.ingredients.map((elem, i) => {
                return (
                  <React.Fragment key={elem.ingredient}>
                    <ListItem>
                      <ListItemText primary={elem.ingredient} />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                );
              })}
            </List>
            {doc.data.recipe_tags.map(recipe_tag => {
              return (
                <Chip
                  key={recipe_tag.tag.id}
                  color="secondary"
                  label={`${recipe_tag.tag.slug}`}
                  className={classes.chip}
                />
              );
            })}
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
