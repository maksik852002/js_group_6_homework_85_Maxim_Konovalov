import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Artists from "./containers/Artists/Artists";
import ArtistDetial from "./containers/ArtistDetial/ArtistDetial";
import Albums from "./containers/Albums/Albums";
import AlbumDetial from "./containers/AlbumDetial/AlbumDetial";

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Artists} />
      <Route path="/artists/:id" component={ArtistDetial} />
      <Route path="/artists" component={Artists} />
      <Route path="/albums/:id" component={AlbumDetial} />
      <Route path="/albums" component={Albums} /> 
      <Route render={() => <h1>Not found</h1>} />
    </Switch>
  </Layout>
);

export default App;
