import React from "react";
import Prismic from 'prismic-javascript';
import { client } from "../prismic-configuration";
import Layout from "../components/layout";
import CocktailCard from "../components/cocktailCard"

export default class extends React.Component {
  static async getInitialProps(context) {
    return await client
      .query(Prismic.Predicates.at("document.type", "recipe"))
      .then(response => ({
        doc: response.results
      }));
  }
  render() {
    return (
      <Layout>
        <CocktailCard data={this.props.doc} />
        
      </Layout>
    );
  }
}