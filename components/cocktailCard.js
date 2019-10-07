import React from "react";
import Link from "next/link";
import { Paper, Grid, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LocalBarTwoToneIcon from "@material-ui/icons/LocalBarTwoTone";
import { RichText } from "prismic-reactjs";

export default props => {
  const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3),
      margin: theme.spacing(1)
    }
  }));
  const classes = useStyles();
  return (
    <Grid container justify="center">
      {props.data.map((recipe) => (
        <Link
          href="/[recipe]"
          as={`/${recipe.uid}`}
          key={`${recipe.uid}`}
        >
          <Grid item xs={11}>
            <Paper className={classes.root} elevation={5}>
              <Typography variant="h5" component="h3">
                <LocalBarTwoToneIcon />
                {RichText.asText(recipe.data.name)}
              </Typography>
              <Typography component="p">
                {RichText.asText(recipe.data.description)}
              </Typography>
            </Paper>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
};